FROM node:latest
WORKDIR ./app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
RUN npx tsc
CMD ["node", "./dist/server.js"]