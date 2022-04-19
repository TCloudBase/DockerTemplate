FROM openjdk:19-slim-buster

RUN apt-get update && apt-get install nginx -y && apt-get clean

COPY dist .

RUN mv ./my.conf ./etc/nginx/nginx.conf

CMD ["sh","start.sh"]