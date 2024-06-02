docker-compose up -d

docker exec -itd ollama ollama run mistral

pipenv shell

python3 ingest.py

chainlit run main.py