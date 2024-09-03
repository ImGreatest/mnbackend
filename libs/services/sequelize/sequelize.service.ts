import { Injectable, OnModuleInit } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "../../../config/database.config";
import { logger } from "../../../logger/logger";

@Injectable()
export class SequelizeService extends Sequelize implements OnModuleInit {
	constructor() {
		super({ ...databaseConfig });
	}

	async onModuleInit(): Promise<void> {
		await this.authenticate()
			.then(() => logger.info(`Successfully connection to database ${process.env.DATABASE_PORT}`))
			.catch((err) => logger.alert(err));
	}
}
