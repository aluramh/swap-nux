FROM node:8.11.3-alpine

COPY . .
RUN yarn install

CMD ["yarn", "start"]
