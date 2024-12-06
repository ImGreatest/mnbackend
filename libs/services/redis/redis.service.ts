import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import Redis from "ioredis";
import { RedisService } from 'nestjs-redis';
import { logger } from "../../../logger/logger";

@Injectable()
export class RedisStorageService implements OnModuleInit, OnModuleDestroy {
	// private readonly _client: Redis;

	constructor(
		private readonly redisService: RedisService
	) {
		// this._client = this.redisService.getClient();
	}

	async onModuleInit(): Promise<void> {
		await this.redisService.getClient().connect();
		logger.info("Redis module is init");
	}

	async onModuleDestroy(): Promise<void> {
		await this.redisService.getClient().quit();
		logger.info("Redis module is destroyed");
	}

	async set(key: string, value: string): Promise<void> {
		await this.redisService.getClient().set(key, value);
	}

	async getValue(key: string): Promise<string | null> {
		return this.redisService.getClient().get(key);
	}
}
