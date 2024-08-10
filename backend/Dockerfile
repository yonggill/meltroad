FROM python:3.11

ENV PYTHONUNBUFFERED 1

RUN apt-get -y update && apt-get -y install vim && apt-get clean
RUN apt install nginx -y
RUN mkdir /home/www
RUN mkdir /home/www/backend/

WORKDIR /home/www/backend/
COPY . .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN mkdir /var/log/gunicorn
RUN mkdir /var/run/gunicorn
RUN rm /etc/nginx/sites-enabled/default && rm -r /etc/nginx/sites-available/
RUN mv ./deploy/backend.conf /etc/nginx/sites-enabled/ && ln -s /etc/nginx/sites-enabled /etc/nginx/sites-available
