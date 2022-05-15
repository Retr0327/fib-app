FROM node:16-alpine

# minimize image size
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ./package*.json ./

RUN npm ci

COPY ./ ./ 

EXPOSE 3000