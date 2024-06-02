from pathlib import Path
import warnings

from loguru import logger

from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from langchain_community.document_loaders.directory import DirectoryLoader
from langchain_community.document_loaders.pdf import PyPDFLoader
from langchain_community.embeddings.ollama import OllamaEmbeddings
from langchain_community.vectorstores.qdrant import Qdrant

from config import EMBEDDING_MODEL, QDRANT_URL, QDRANT_COLLECTION_NAME

warnings.simplefilter("ignore")

ABS_PATH = Path(__file__).parent.resolve()


def create_vector_database():
    """
    Creates a vector database using document loaders and embeddings.

    This function loads data from PDF, markdown and text files in the 'data/' directory,
    splits the loaded documents into chunks, transforms them into embeddings using OllamaEmbeddings,
    and finally persists the embeddings into a Chroma vector database.

    """
    # Initialize loaders for different file types
    pdf_loader = DirectoryLoader("data/", glob="**/*.pdf", loader_cls=PyPDFLoader)
    loaded_documents = pdf_loader.load()
    logger.debug(loaded_documents)

    # Split loaded documents into chunks
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=40)
    chunked_documents = text_splitter.split_documents(loaded_documents)
    logger.debug(chunked_documents)

    # Initialize Embeddings
    # ollama_embeddings = OllamaEmbeddings(model="mistral")
    embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)

    logger.debug("ingesting to qdrant ...")
    qdrant = Qdrant.from_documents(
        documents=chunked_documents,
        embedding=embeddings,
        url=QDRANT_URL,
        # prefer_grpc=True,
        collection_name=QDRANT_COLLECTION_NAME,
    )


if __name__ == "__main__":
    create_vector_database()
