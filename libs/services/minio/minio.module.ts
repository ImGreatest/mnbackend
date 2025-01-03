import { Module } from "@nestjs/common";
import { MinioClientService } from "./minio.service";
import { MinioModule } from "nestjs-minio-client";
import { minioConfig } from "../../../config/config";

@Module({
	imports: [
		MinioModule.register({
			endPoint: minioConfig.Host,
			port: minioConfig.Port,
			useSSL: minioConfig.UseSSL,
			accessKey: minioConfig.AccessKey,
			secretKey: minioConfig.SecretKey,
			pathStyle: true,
		}),
	],
	providers: [MinioClientService],
	exports: [MinioClientService],
})
export class MinioClientModule {}
