FROM node:20-alpine3.17

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]