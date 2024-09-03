import { Dialect } from "sequelize";

export interface ISequelizeConfig {
	username: string;
	password: string;
	host: string;
	port: number;
	database: string;
	dialect: Dialect;
	dialectOptions: object;
	operatorsAliases: boolean;
	models: string[];
}
