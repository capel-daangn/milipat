from fastapi import FastAPI, WebSocket
from service import pdf_to_sentences, create_tfidf, create_network, convert_to_ts_format
from schema import *

from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

# from langchain_community.llms.ollama import Ollama

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
    "https://milipat.vercel.app"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# llm = Ollama(model="mistral", temperature=0, base_url=OLLAMA_BASE_URL)

@app.get("/")
async def health_check():
    return "ok"

@app.get("/pdf")
async def get_pdf(filename: str = "휴대형 군사용 드론 폭탄 장치.pdf"):
    return FileResponse(f"./static/{filename}", filename=filename, media_type="application/pdf")

@app.get("/network")
async def get_network(pdf_path: str = "휴대형 군사용 드론 폭탄 장치.pdf"):
    #
    response_payload = {}

    #
    parsed_sentences = pdf_to_sentences("./static/" + pdf_path)
    # response_payload["parsed_sentences"] = parsed_sentences

    #
    terms, terms_with_score_sorted, nodes, edges = create_network(parsed_sentences)
    response_payload["terms"] = terms
    response_payload["terms_with_score_sorted"] = terms_with_score_sorted
    response_payload["nodes"] = nodes
    response_payload["edges"] = edges

    return response_payload


@app.get("/tfidf")
async def get_tfidf(text: str = "휴대형 군사용 드론 폭탄 장치"):
    #
    response_payload = {}

    terms, tfidf_matrix, top_terms, top_indices, X =  create_tfidf([text])
    response_payload["terms"] = list(terms)
    response_payload["top_terms"] = list(top_terms)

    return response_payload

# @app.websocket('/ws')
# async def websocket_endpoint(websocket: WebSocket):
#     await websocket.accept()
#     try:
#         while True:
#             text_data = await websocket.receive_text()
#             query = text_data
#             for chunks in llm.stream(query):
#                 print(chunks)
#                 await websocket.send_text(chunks)
#             await websocket.send_text('**|||END|||**')
#     except Exception as e:
#         print(f"websocket error: {str(e)}")
#     finally:
#         await websocket.close()