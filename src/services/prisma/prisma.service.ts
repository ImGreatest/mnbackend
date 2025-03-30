import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	async onModuleInit(): Promise<void> {
		try {
			await this.$connect();
		} catch (e) {
			throw new Error(`Fail connect to the database - ${e}`);
		}
	}

	async onModuleDestroy(): Promise<void> {
		await this.$disconnect();
	}

	async cleanDatabase(): Promise<void> {
		const models = Object.keys(this).filter(
			(key) => typeof this[key] === 'object' && 'deleteMany' in this[key],
		);

		try {
			/* eslint-disable */
			await this.$transaction(
				models.map((modelKey) => (this[modelKey] as any).deleteMany)
			);
		} catch (e) {
			throw new Error(`Error cleaning database ${e}`);
		}
	}
}
