
export interface IDatabaseConfig {
	username: string;
	password: string;
	host: string;
	port: number;
	database: string;
	dialect: string;
	dialectOptions: object;
	// operatorsAliases: boolean;
	models: string[];
}
