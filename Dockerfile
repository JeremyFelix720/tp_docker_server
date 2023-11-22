FROM node:18-alpine
WORKDIR /tp-docker
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3032
RUN npm run build
CMD ["node", "dist/index.js"]