import PyPDF2
import re



def pdf_to_sentences(pdf_path):
    sentences = []

    # PDF 파일 열기
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)

        # 각 페이지에 대해 반복
        for page_num in range(len(reader.pages)):
            page = reader.pages[page_num]
            text = page.extract_text()

            # 문장 분리를 위한 정규표현식
            sentence_regex = re.compile(r"(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s")
            page_sentences = sentence_regex.split(text)

            # 각 문장에 대해 공백 제거 후 리스트에 추가
            for sentence in page_sentences:
                sentence = sentence.strip()
                if sentence:
                    sentences.append(sentence)

    return sentences


import networkx as nx
from sklearn.feature_extraction.text import TfidfVectorizer
from konlpy.tag import Okt
import numpy as np


okt = Okt()

# 불용어 리스트
stopwords = set(
    [
        "은",
        "는",
        "이",
        "가",
        "을",
        "를",
        "에",
        "에서",
        "으로",
        "와",
        "과" "이다",
        "하다",
        "것",
        "그",
        "이렇다",
        "그렇다",
        "되다",
        "같다",
        #
        "아니다",
        "나타나다",
        "있다",
        "상기",
        "가능하다",
        "특징",
        "보다",
        "특허",
        "발명",
        "또는",
        "하우",
        "되어다",
        "공개",
        "따르다",
        "이다",
        "포함",
        "실시",
        "구성",
        "청구",
        "사용",
        "주식회사",
        "청구항",
        "설명",
        "상태",
        "전체",
        "특허법",
        "모듈",
        "장치",
        "도면",
        "구비",
        "명칭",
        "심사",
        "나타내다",
        "바라보다",
        "의하다",
        "늘다",
        "10",
        "100",
        "0154301",
        "및",
        "군",
        "수",
        "일",
        "의",
        "기",
        "로",
        "형",
        "예",
        "징",
        "항",
        "용",
        "이르다",
        ""
    ]
)

# 전처리 및 토큰화 함수
def preprocess(text):
    # 한글, 공백을 제외한 모든 문자 제거
    text = re.sub("[^ㄱ-ㅎㅏ-ㅣ가-힣 ]", "", text)
    # 형태소 분석 및 불용어 처리
    tokens = okt.morphs(text, stem=True)
    tokens = [word for word in tokens if word not in stopwords]
    return " ".join(tokens)

def tokenize_and_remove_stopwords(doc):
    tokens = okt.morphs(doc, stem=True)
    tokens = [token for token in tokens if token not in stopwords]
    return tokens

def create_tfidf(parsed_sentences):
    preprocessed_documents = [preprocess(doc) for doc in parsed_sentences]

    # TfidfVectorizer 초기화
    vectorizer = TfidfVectorizer(
        tokenizer=tokenize_and_remove_stopwords, max_features=10
    )
    X = vectorizer.fit_transform(preprocessed_documents)

    # 상위 10개 단어 추출
    terms = vectorizer.get_feature_names_out()
    tfidf_matrix = X.toarray()
    sum_tfidf = tfidf_matrix.sum(axis=0)
    top_indices = np.argsort(sum_tfidf)[-10:]
    top_terms = terms[top_indices]

    return  terms, tfidf_matrix, top_terms, top_indices, X





def create_network(parsed_sentences):
    terms, tfidf_matrix, top_terms, top_indices, X = create_tfidf(parsed_sentences)

    # 네트워크 그래프 생성
    G = nx.Graph()

    # 노드 추가
    for term in top_terms:
        G.add_node(term)

    # 간선 추가 (TF-IDF 값에 기반한 임의의 간선 연결)
    threshold = 0.1
    for i in range(len(top_terms)):
        for j in range(i + 1, len(top_terms)):
            if (
                tfidf_matrix[:, top_indices[i]].sum() > threshold
                and tfidf_matrix[:, top_indices[j]].sum() > threshold
            ):
                G.add_edge(
                    top_terms[i],
                    top_terms[j],
                    weight=tfidf_matrix[:, top_indices[i]].sum()
                    + tfidf_matrix[:, top_indices[j]].sum(),
                )

    # 네트워크 그래프 시각화
    pos = nx.spring_layout(G)


    ################################
    #
    ################################
    # Calculate the mean TF-IDF score for each word across all documents
    mean_tfidf_scores = np.mean(X, axis=0)

    # Find the index of the word with the highest mean TF-IDF score
    most_important_word_index = np.argmax(mean_tfidf_scores)

    # Get the most important word using the index
    most_important_word = terms[most_important_word_index]

    ################################
    #
    ################################
    # Calculate the mean TF-IDF score for each word across all documents
    mean_tfidf_scores = np.mean(tfidf_matrix, axis=0)

    # Iterate over each word and its mean TF-IDF score
    for word, score in zip(terms, mean_tfidf_scores.tolist()):
        print(f"Word: {word}, Mean TF-IDF Score: {score}")

    terms_with_score = {
        terms[i]: score for i, score in enumerate(mean_tfidf_scores.tolist())
    }
    terms_with_score_sorted = sorted(
        terms_with_score.items(), reverse=True, key=operator.itemgetter(1)
    )

    data = {(u, v): round(d["weight"], 2) for u, v, d in G.edges(data=True)}
    nodes, edges = convert_to_ts_format(data)

    return (
        # X.shape,
        # most_important_word,
        list(terms),
        terms_with_score_sorted,
        nodes,
        edges,
    )


#
import operator


def convert_to_ts_format(graph_data):
    nodes = []
    edges = []

    # 노드와 엣지 정보 추출
    for edge, weight in graph_data.items():
        source, target = edge
        weight_label = f"{weight:.2f}"

        # 노드 추가
        if source not in [node["id"] for node in nodes]:
            nodes.append({"id": source, "label": source})
        if target not in [node["id"] for node in nodes]:
            nodes.append({"id": target, "label": target})

        # 엣지 추가
        edge_id = f"{source}-{target}"
        edges.append(
            {"source": source, "target": target, "id": edge_id, "label": weight_label}
        )

    return nodes, edges


# ts_formatted_data = convert_to_ts_format(data)
# print(ts_formatted_data["nodes"])
# print(ts_formatted_data["edges"])
