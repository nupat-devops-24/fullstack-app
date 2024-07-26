# This Dockerfile is used to set up a local development environment

FROM node:20-alpine

WORKDIR /

# COPY package*.json ./app/
COPY . .

RUN npm install

EXPOSE 3000

# COPY .devcontainer/welcome-message.txt /usr/local/etc/vscode-dev-containers/first-run-notice.txt

CMD [ "node", "index.js" ]