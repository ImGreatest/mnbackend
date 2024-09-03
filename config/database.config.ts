import { Dialect } from "sequelize";
import path from "node:path";
import { ISequelizeConfig } from "../libs/shared/interfaces/sequelize-config.interface";

export const databaseConfig: ISequelizeConfig = {
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	host: process.env.DATABASE_HOST,
	port: +Number(process.env.DATABASE_PORT),
	database: process.env.DATABASE_NAME,
	dialect: process.env.DATABASE_DIALECT as Dialect,
	dialectOptions: {
		supportBigNumbers: true,
	},
	operatorsAliases: false,
	models: [path.join(__dirname, '../database/models/*.entity.ts')],
};
