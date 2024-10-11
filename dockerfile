FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN yarn

# Install typescript for TSC
RUN yarn add typescript

# Bundle source files
COPY . .

# Build the bot
RUN yarn build

# Create tmp directory
RUN mkdir -p /usr/src/app/temporary

#Expose ports to the outside world
EXPOSE 56748

# Start the bot
CMD ["yarn", "start"]
