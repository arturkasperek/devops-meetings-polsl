FROM node:14-alpine3.12
COPY package.json .
RUN npm install
COPY main.js .

ENTRYPOINT ["node", "main.js"]