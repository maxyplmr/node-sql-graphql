FROM node:18

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 2999

CMD ["npm", "start"]
