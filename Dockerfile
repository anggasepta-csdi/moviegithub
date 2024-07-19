# build from official docker hub node.js image
FROM node:lts-alpine as build

# set working dir
WORKDIR /app

# copy the package .json and package-lock .json
COPY package*.json ./

# install the depedencies
RUN npm install

# Copy the rest of the files
COPY . .

# Start App
CMD ["npm", "run", "dev"]