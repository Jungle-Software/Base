# pull official base image
FROM node:16.15

# set user to node give root privilege to npm
USER node

# set work directory
WORKDIR /app/frontend

# install dependencies
COPY --chown=node:node package*.json ./
RUN npm install

# Can be removed once we have dependencies in package.json ? https://morioh.com/p/c3e99e32e846
RUN mkdir -p node_modules

# open port
EXPOSE 3000