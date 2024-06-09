FROM python:3.8-slim

RUN apt-get update && \
apt-get -y install sudo

RUN sudo apt install default-jdk -y

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# 
COPY ./ /code/

# 
CMD ["fastapi", "run", "main.py", "--port", "80"]