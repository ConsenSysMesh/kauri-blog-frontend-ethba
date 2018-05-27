FROM node:latest

RUN npm install

RUN npm build

EXPOSE 3000
CMD "npm" "run" "start:prod"