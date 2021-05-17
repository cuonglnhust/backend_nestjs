FROM node:12
WORKDIR /app
COPY ./package.json ./
COPY . .
RUN yarn install
RUN yarn build
