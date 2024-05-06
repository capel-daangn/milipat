docker-compose up -d

docker exec -itd ollama ollama run gemma:2b

pipenv shell

python3 ingest.py

chainlit run main.py