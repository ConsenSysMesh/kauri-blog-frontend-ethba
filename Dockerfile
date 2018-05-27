FROM node:latest


WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/

RUN yarn
COPY . /app
RUN yarn build


EXPOSE 3000
CMD "npm" "run" "start:prod"