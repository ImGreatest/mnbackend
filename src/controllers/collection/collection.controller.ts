import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CollectionService } from "../../../libs/domain/collection/collection.service";
import { ReqCreateCollectionDto } from "../../../libs/domain/collection/dto/req-dto/req-create-collection.dto";
import { ResCollectionDto } from "../../../libs/domain/collection/dto/res-dto/res-collection.dto";
import { ResCollectionsDto } from "../../../libs/domain/collection/dto/res-dto/res-collections.dto";
import { ReqUpdateCollectionDto } from "../../../libs/domain/collection/dto/req-dto/req-update-collection.dto";

@ApiTags('collection')
@ApiBearerAuth()
@Controller('collection')
export class CollectionController {
	constructor(private readonly collectionService: CollectionService) {}

	@Post('create-collection')
	createCollection(@Body() data: ReqCreateCollectionDto): Promise<ResCollectionDto> {
		return this.collectionService.createCollection(data);
	}

	@Get('get-collection/:id')
	getCollection(@Param('id') collectionId: string): Promise<ResCollectionDto> {
		return this.collectionService.getCollection(collectionId);
	}

	@Get('get-collections/')
	getCollections(): Promise<ResCollectionsDto> {
		return this.collectionService.getCollections();
	}

	@Post('update-collection/:id')
	updateCollection(
		@Param('id') collectionId: string,
		@Body() data: ReqUpdateCollectionDto,
	): Promise<void> {
		return this.collectionService.updateCollection(collectionId, data);
	}

	@Delete('delete-collection/:id')
	deleteCollection(@Param('id') collectionId: string): Promise<void> {
		return this.collectionService.deleteCollection(collectionId);
	}
}
