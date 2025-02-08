

from langchain import hub

from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

from langchain.docstore.document import Document
from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from langchain.chains.retrieval_qa.base import RetrievalQA
from langchain.chains.conversational_retrieval.base import ConversationalRetrievalChain


from langchain_community.vectorstores.qdrant import Qdrant
from langchain_community.llms.ollama import Ollama

from config import *
import qdrant_client
import chainlit as cl

from pathlib import Path
ABS_PATH = Path(__file__).parent.resolve()

rag_prompt_mistral = hub.pull("rlm/rag-prompt-mistral")

def qa_bot():
    llm_callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])
    llm = Ollama(model=OLLAMA_MODEL, verbose=True, callback_manager=llm_callback_manager)
    client = qdrant_client.QdrantClient(QDRANT_URL)
    embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)
    vectorstore = Qdrant(
        client, embeddings=embeddings, collection_name=QDRANT_COLLECTION_NAME
    )

    qa_chain = RetrievalQA.from_chain_type(
        llm,
        retriever=vectorstore.as_retriever(),
        chain_type_kwargs={"prompt": rag_prompt_mistral},
        return_source_documents=True,
    )

    return qa_chain

@cl.author_rename
def rename(orig_author: str):
    rename_dict = {"Ollama": CHATBOT_NAME, "Chatbot": CHATBOT_NAME}
    return rename_dict.get(orig_author, orig_author)


@cl.on_chat_start
async def start():
    chain = qa_bot()

    welcome_message = cl.Message(content="시작 중...")
    await welcome_message.send()

    welcome_message.content = "안녕하세요! 무엇이든 질문하세요 😄"
    await welcome_message.update()

    cl.user_session.set("chain", chain)



@cl.on_message
async def main(message: cl.Message):
    chain: ConversationalRetrievalChain = cl.user_session.get("chain")
    cb = cl.AsyncLangchainCallbackHandler()
    cb.answer_reached = True

    rag_prompt = "너는 제공된 컨텍스트, 즉 주입된 데이터 내에서만 대답할 수 있어. 만약 주입된 데이터 내에서 답변할 수 없으면, 공손하게 그 주제에 대해서는 아는 바가 없다고 말해."
    rag_prompt_post = "한국어로 말해줘"
    message.content = rag_prompt + "\n\n" + message.content + "\n" + rag_prompt_post

    res = await chain.ainvoke(message.content, callbacks=[cb])

    answer: str = res["result"]
    source_documents: list[Document] = res["source_documents"]

    text_elements: list[cl.Text] = []

    if source_documents:
        text_elements = [
            cl.Text(content=doc.page_content, name=f"source_{idx}")
            for idx, doc in enumerate(source_documents)
        ]
        source_names = [text_el.name for text_el in text_elements]

        source_answer = (
            f"\n\nSources: {', '.join(source_names)}"
            if source_names
            else "\n\nNo sources found"
        )
        answer += source_answer

    await cl.Message(content=answer, elements=text_elements).send()
