format:
	pnpm run format
up:
	docker-compose up
down:
	docker-compose down
server-update:
	docker-compose pull && docker-compose up -d --build
run:
	pnpm run build && pnpm run start:dev
migrate:
	npx prisma migrate dev
