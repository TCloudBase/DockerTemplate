FROM nginx

RUN apt-get update && apt-get install nodejs -y && apt-get install npm -y && apt-get clean

COPY my.conf ./etc/nginx/conf.d/default.conf

WORKDIR /usr/src/app

COPY app/package*.json ./

RUN npm config set registry https://mirrors.tencent.com/npm/ && npm install

COPY app ./

CMD ["sh", "start.sh"]
