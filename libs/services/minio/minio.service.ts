import { Injectable, OnModuleInit } from "@nestjs/common";
import { Client } from 'minio';
import { minioConfig } from "../../../config/config";
import { logger } from "../../../logger/logger";
import { ResFileDto } from "./dto/res-file.dto";
import * as crypto from 'crypto';

@Injectable()
export class MinioService implements OnModuleInit {
	private readonly baseBucket: string;
	private minioClient: Client;

	constructor() {
		this.minioClient = new Client({
			endPoint: minioConfig.Host,
			port: minioConfig.Port,
			useSSL: minioConfig.UseSSL,
			accessKey: minioConfig.AccessKey,
			secretKey: minioConfig.SecretKey,
		});
		this.baseBucket = minioConfig.BucketName;
	}

  async onModuleInit(): Promise<void> {
    await this.createBucket();
  }

	async createBucket(): Promise<void> {
		if (!await this.minioClient.bucketExists(this.baseBucket)) {
			logger.info('Trying create new Bucket');

			try {
				await this.minioClient.makeBucket(this.baseBucket);

				logger.info('New bucket was created');
			} catch (e) {
				logger.error('Error create minio bucket');

				throw new Error('Error create minio bucket');
			}
		}
	}

	async uploadFile(file: Express.Multer.File): Promise<ResFileDto> {
		const hashedFileName = crypto
			.createHash('md5')
			.update(Date.now().toString())
			.digest('hex')
		const ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
		const filename = hashedFileName + ext;

		await this.minioClient.putObject(this.baseBucket, hashedFileName + ext, file.buffer);

		return {
      url: `https://${minioConfig.Host}:${minioConfig.Port}/${minioConfig.BucketName}/${filename}`,
    };
	}

	async removeFile(objectName: string, bucket: string = this.baseBucket): Promise<void> {
		logger.info('Trying removing object');
		try {
			await this.minioClient.removeObject(bucket, objectName);
		} catch (e) {
			logger.error('Unknown error');

			throw new Error('Unknown error');
		}
	}
}
