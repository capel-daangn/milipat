from pydantic import BaseModel


class Network(BaseModel):
    terms: list
    terms_with_score_sorted: list
    nodes: list
    edges: list
