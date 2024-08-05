FROM node:20-alpine

WORKDIR /app

COPY ./package*.json ./

# Clean install (ci) dependencies only (exclude devDependencies).
RUN npm ci --production

COPY . /app

CMD [ "npm", "start" ]