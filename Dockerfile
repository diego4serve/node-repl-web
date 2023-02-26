FROM node:18-alpine
RUN mkdir /node-repl-web
WORKDIR /node-repl-web
COPY package*.json ./
RUN apk add --no-cache build-base
RUN apk add --no-cache python3
RUN npm install
ENV NODE_REPL_HISTORY_SIZE=0
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
