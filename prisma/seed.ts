import { ERole, PrismaClient } from "@prisma/client";
import { IUser } from "../libs/shared/entity";
import { MockDataReqUser } from "../libs/domain/user/mocks/const/mock-data-req-user";
import { logger } from "../logger/logger";

const prisma = new PrismaClient();

async function main(): Promise<void> {
	const admin: IUser = await prisma.user.upsert({
		where: {
			login: "admin",
			email: "admin@prisma.com",
			password: "admin",
		},
		update: {},
		create: {
			...MockDataReqUser,
			login: "admin",
			email: "admin@prisma.com",
			password: "admin",
			role: ERole.admin,
		},
	});

	const client: IUser = await prisma.user.upsert({
		where: {
			login: "client",
			email: 'client@prisma.com',
			password: "client",
		},
		update: {},
		create: {
			...MockDataReqUser,
			login: "client",
			email: "client@prisma.com",
			password: "client",
			role: ERole.client,
		},
	});
	logger.info(JSON.stringify(admin), JSON.stringify(client));
}

main()
	.then(async () => {
		await prisma.$connect();
	})
	.catch(async (e) => {
		logger.error(e);
		await prisma.$disconnect();
		process.exit(1);
	})
