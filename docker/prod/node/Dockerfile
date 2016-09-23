FROM node:slim
WORKDIR /code
COPY code /code
RUN npm install
RUN npm install pm2 -g
EXPOSE  8080
CMD ["pm2", "start", "app.js", "--no-daemon", "--env prod"]
