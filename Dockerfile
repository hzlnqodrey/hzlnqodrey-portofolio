FROM node:14

WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Prevent to download package.json devDependencies, use --only=production
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Run the web service on container
CMD node server.js