FROM node:8.9-alpine

COPY . .
RUN yarn install

CMD ["yarn", "start"]
