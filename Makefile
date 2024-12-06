up:
	docker-compose up
down:
	docker-compose down
server-update:
	docker-compose pull && docker-compose up -d --build
