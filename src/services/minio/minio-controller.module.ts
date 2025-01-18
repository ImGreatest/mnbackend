import { Module } from "@nestjs/common";
import { MinioController } from "./minio.controller";
import { MinioClientModule } from "../../../libs/services/minio/minio.module";

@Module({
	imports: [MinioClientModule],
	controllers: [MinioController],
})
export class MinioControllerModule {}
