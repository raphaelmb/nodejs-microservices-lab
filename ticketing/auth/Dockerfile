FROM node:16.17-alpine3.16

WORKDIR /app

COPY package.json .

RUN npm install --only=prod

COPY . .

CMD ["npm", "start"]