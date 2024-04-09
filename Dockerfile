# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port on which your Node.js app will run
#EXPOSE 3000

# Define the command to run your app
CMD ["node", "app.js"]
