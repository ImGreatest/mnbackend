import path from "node:path";
import { IDatabaseConfig } from "../libs/shared/interfaces/database-config.interface";

export const databaseConfig: IDatabaseConfig = {
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	host: process.env.DATABASE_HOST,
	port: +Number(process.env.DATABASE_PORT),
	database: process.env.DATABASE_NAME,
	dialect: process.env.DATABASE_DIALECT,
	dialectOptions: {
		supportBigNumbers: true,
	},
	models: [path.join(__dirname, 'database/models/*.model.ts')],
};
