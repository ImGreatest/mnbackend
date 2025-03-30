import * as process from "node:process";

export const config = Object.freeze({
	MicroservicePort: Number(process.env.MICROSERVICE_PORT),
	DatabaseHost: Number(process.env.DATABASE_HOST) || process.env.DATABASE_HOST,
	HashSaltRound: Number(process.env.HASH_SALT_ROUND) || process.env.HASH_SALT_ROUND,
	JwtSecret: process.env.JWT_SECRET,
	JwtExpiresIn: process.env.JWT_EXPIRES_IN,
	RefreshLength: 64,
	JwtLifeTime: 10000,
	TokenCoolDown: 600,
});
