FROM python:2.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN apt-get update ; apt-get install -y python-mysqldb build-essential
RUN pip install -r requirements.txt
ADD . /code/
