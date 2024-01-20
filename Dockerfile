FROM node:alpine

WORKDIR /app

COPY app.js .
COPY package.json .
COPY package-lock .

RUN apk add --no-cache tzdata
ENV TZ=Asia/Bangkok
RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm","start"]