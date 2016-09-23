FROM ubuntu
WORKDIR /code
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y git git-core
RUN npm install -g gulp
RUN ln -s /usr/bin/nodejs /usr/bin/node
EXPOSE  3000
