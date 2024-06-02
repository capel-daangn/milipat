from langchain_community.document_loaders.csv_loader import CSVLoader
from langchain_community.document_loaders.pdf import PyPDFLoader
from langchain_community.document_loaders.directory import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings.huggingface import HuggingFaceBgeEmbeddings
from langchain_community.vectorstores.qdrant import Qdrant

from loguru import logger
from config import *

import warnings

warnings.simplefilter("ignore")

from pathlib import Path

ABS_PATH = Path(__file__).parent.resolve()


# Define a dictionary to map file extensions to their respective loaders
loaders = {
    ".pdf": PyPDFLoader,
    ".csv": CSVLoader,
}


def create_vector_database(file_type):
    dir_loader = DirectoryLoader(
        "data/", glob=f"**/*{file_type}", loader_cls=loaders[file_type]
    )
    # csv_loader = CSVLoader(file_path="test.csv", encoding="utf-8")
    loaded_documents = dir_loader.load()
    logger.debug(loaded_documents)

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=40)
    chunked_documents = text_splitter.split_documents(loaded_documents)
    logger.debug(chunked_documents)

    embeddings = HuggingFaceBgeEmbeddings(model_name=EMBEDDING_MODEL)
    logger.debug("ingesting to qdrant ...")
    qdrant = Qdrant.from_documents(
        documents=loaded_documents,
        embedding=embeddings,
        url=QDRANT_URL,
        collection_name=QDRANT_COLLECTION_NAME,
    )


if __name__ == "__main__":
    for e in loaders.keys():
        create_vector_database(e)
