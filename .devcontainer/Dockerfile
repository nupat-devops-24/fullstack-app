# This Dockerfile is used to set up a local development environment

FROM node:20-alpine

WORKDIR /app

# Note: set the parent directory as the build context. To build manually with this Dockerfile,
# specify the path using the --file flag in your 'docker build' command.
COPY ./package*.json /app

RUN npm install

# Install additional linux packages
# RUN apt-get update && \
#     apt-get -y install nano

#COPY ../. /app

EXPOSE 3000

COPY ./.devcontainer/welcome-message.txt /usr/local/etc/vscode-dev-containers/first-run-notice.txt

CMD [ "node", "index.js" ]