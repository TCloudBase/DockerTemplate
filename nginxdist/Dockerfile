FROM nginx

COPY my.conf ./etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY dist ./

CMD /bin/sh -c 'nginx -g "daemon off;"'
