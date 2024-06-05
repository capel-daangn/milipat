# ollama-chainlit

originally from [sudarshan-koirala/langchain-ollama-chainit](https://github.com/sudarshan-koirala/langchain-ollama-chainlit)

## How to

1. setup python virtual environment

   ```shell
   pipenv install
   ```

2. run docker containers

   ```shell
   docker-compose up -d
   ```

3. pull and serve ollama model

   ```shell
   docker exec -it ollama ollama run mistral
   ```

4. ingest data

   ```shell
   python3 ingest.py
   ```

5. run chainlit app with custom data based chainlit app

   ```shell
   chainlit run main.py
   ```
