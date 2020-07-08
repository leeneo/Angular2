# base image
FROM nginx

LABEL version="1.0" author="leeneo@xingzhihen.com"

USER root

# set working directory
#RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
#COPY package*.json /usr/src/app/

#RUN npm install
#RUN npm install -g @angular/cli

# add `/usr/src/app/node_modules/.bin` to $PATH
#ENV PATH /usr/src/app/node_modules/.bin:$PATH

# add app
#COPY . /usr/src/app

# start app 根据实际情况修改配置
# CMD ng serve --host 0.0.0.0
#CMD ng serve --port=8080 --proxy-config=proxy.conf.json --configuration=local --host 0.0.0.0