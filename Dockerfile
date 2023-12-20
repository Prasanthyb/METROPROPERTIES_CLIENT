FROM node:18-slim

# Create app directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set working directory to app directory
WORKDIR /home/node/app

# Change the user to 'node'
USER node

# Copy package.json and package-lock.json
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm install

# Add the rest of the application code
COPY --chown=node:node . .

# Expose port and start application
EXPOSE 3000

CMD [ "npm", "start"]
 