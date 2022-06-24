FROM node:14

WORKDIR /usr/src/app

# Copying package.json before src/ prevents rebuild of node modules on src/ changes
# COPY package*.json ./

COPY . .

RUN npm ci && npm run-script build && rm -rf node_modules && npm ci --only=production

CMD npm run-script serve
