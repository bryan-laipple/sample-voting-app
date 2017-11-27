FROM node:8-alpine

WORKDIR /app
COPY . /app

RUN npm install

ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "run", "start:prod"]