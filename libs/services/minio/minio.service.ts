import { Injectable, OnModuleInit } from "@nestjs/common";
import { minioConfig } from "../../../config/config";
import { logger } from "../../../logger/logger";
import { ResFileDto } from "./dto/res-file.dto";
import { MinioService, MinioClient } from 'nestjs-minio-client';
import * as crypto from 'crypto';

@Injectable()
export class MinioClientService implements OnModuleInit {
	private readonly baseBucket = minioConfig.BucketName;

	public get client(): MinioClient {
		return this.minio.client;
	}

	constructor(private readonly minio: MinioService) {
		logger.info('MinioService was init');
	}

  async onModuleInit(): Promise<void> {
    await this.createBucket();
  }

	async createBucket(): Promise<void> {
		logger.verbose('MinioService was createBucket method without params');

		await this.client.makeBucket(this.baseBucket, 'eu-west-3');
	}

	async uploadFile(file: Express.Multer.File): Promise<ResFileDto> {
		const hashedFileName = crypto
			.createHash('md5')
			.update(Date.now().toString())
			.digest('hex')
		const ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
		const filename = hashedFileName + ext;

		await this.client.putObject(this.baseBucket, hashedFileName + ext, file.buffer);

		return {
      url: `https://${minioConfig.Host}:${minioConfig.Port}/${minioConfig.BucketName}/${filename}`,
    };
	}

	async removeFile(objectName: string, bucket: string = this.baseBucket): Promise<void> {
		logger.info('Trying removing object');
		try {
			await this.client.removeObject(bucket, objectName);
		} catch (e) {
			logger.error('Unknown error');

			throw new Error('Unknown error');
		}
	}
}
