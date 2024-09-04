FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run lint

RUN npx prisma generate

RUN npm run build

EXPOSE 8080

ENV NODE_ENV=production

#CMD ["npm", "run", "start:prod"]
