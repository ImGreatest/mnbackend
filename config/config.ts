import "dotenv/config"
import * as process from "node:process";

export const config = Object.freeze({
	DatabaseHost: Number(process.env.DATABASE_HOST) || process.env.DATABASE_HOST,
	ApiPort: Number(process.env.API_PORT),
	PostgresPort: Number(process.env.POSTGRES_PORT),
	HashSaltRound: Number(process.env.HASH_SALT_ROUND),
	JwtSecret: process.env.JWT_SECRET,
	JwtExpiresIn: process.env.JWT_EXPIRES_IN,
	RefreshLength: 64,
	JwtLifeTime: 10000,
	TokenCoolDown: 600,
});


export const JwtConfig = {
	secret: process.env.JWT_SECRET,
	expiresIn: process.env.JWT_EXPIRES ?? '900d',
};

export const emailConfig = Object.freeze({
	EmailFrom: process.env.EMAIL_FROM,
	EmailPass: process.env.EMAIL_PASS,
});

export const minioConfig = Object.freeze({
	Host: process.env.MINIO_HOST || 'localhost',
	Port: parseInt(process.env.MINIO_PORT) || 9000,
	UseSSL: process.env.MINIO_USE_SSL === 'true' || false,
	AccessKey: process.env.MINIO_ACCESS_KEY,
	SecretKey: process.env.MINIO_SECRET_KEY,
	BucketName: process.env.MINIO_BUCKET_NAME,
});
