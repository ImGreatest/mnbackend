import { Controller, Delete, Param, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { ResFileDto } from "./dto/res-file.dto";
import { MinioService } from "./minio.service";
import { FileInterceptor } from "@nestjs/platform-express/multer/interceptors";

@ApiTags('minio')
@ApiBearerAuth()
@Controller(['minio', 'file', 'items'])
export class MinioController {
	constructor(private readonly minioService: MinioService) {}

	@Post('upload')
	@ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
	})
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File): Promise<ResFileDto> {
		return this.minioService.uploadFile(file);
	}

	@Delete(':objectName')
	removeFile(@Param('objectName') objectName: string, @Query() bucket?: string): Promise<void> {
		return this.minioService.removeFile(objectName, bucket)
	}
}
