from fastapi import FastAPI
from service import pdf_to_sentences, create_network, convert_to_ts_format
from schema import *


app = FastAPI()


@app.get("/tf-idf")
async def getTFIDF(pdf_path: str = "휴대형 군사용 드론 폭탄 장치.pdf"):
    #
    response_payload = {}

    #
    parsed_sentences = pdf_to_sentences(pdf_path)
    # response_payload["parsed_sentences"] = parsed_sentences

    #
    terms, terms_with_score_sorted, nodes, edges = create_network(parsed_sentences)
    response_payload["terms"] = terms
    response_payload["terms_with_score_sorted"] = terms_with_score_sorted
    response_payload["nodes"] = nodes
    response_payload["edges"] = edges

    return response_payload
