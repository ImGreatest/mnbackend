FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY package-lock.json ./

RUN pnpm install

COPY . .

RUN npm run lint

RUN npx prisma generate

RUN pnpm run build

EXPOSE 8080

ENV NODE_ENV=production

#CMD ["npm", "run", "start:prod"]
