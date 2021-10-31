FROM node:16-alpine
WORKDIR /usr/src/app

COPY package*.json ./
COPY dist ./dist
COPY *.yaml ./

RUN npm install --production
CMD [ "npm", "run", "start:production" ]
EXPOSE 3000