FROM nginx:latest

ADD ./conf/default.conf /etc/nginx/conf.d/default.conf
#ADD ./routes /usr/share/nginx/html

RUN echo "start nginx"
