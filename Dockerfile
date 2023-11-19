# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

COPY tsconfig*.json ./tsconfig.json

RUN npm run build

# Expose the port that your application will run on
EXPOSE 2999

# Start the application
CMD ["npm", "start"]
