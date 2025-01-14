import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { RedisModule } from "nestjs-redis";
import { RedisStorageService } from "./redis.service";

// TODO fix redis endpoint
@Global()
@Module({
	imports: [
		ConfigModule.forRoot(),
		RedisModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				url: `redis://${configService.get('REDIS_HOST')}:${configService.get('REDIS_PORT')}`,
			}),
			inject: [ConfigService],
		}),
	],
	providers: [RedisStorageService],
	exports: [RedisStorageService],
})
export class RedisModuleWrapper {}
