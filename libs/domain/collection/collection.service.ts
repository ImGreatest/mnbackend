import { Injectable } from "@nestjs/common";
import { ReqCreateCollectionDto } from "./dto/req-dto/req-create-collection.dto";
import { ResCollectionDto } from "./dto/res-dto/res-collection.dto";
import { ResCollectionsDto } from "./dto/res-dto/res-collections.dto";
import { ReqUpdateCollectionDto } from "./dto/req-dto/req-update-collection.dto";
import { CollectionRepository } from "./repository/collection.repository";
import { logger } from "../../../logger/logger";

@Injectable()
export class CollectionService {
	constructor(private readonly collectionRep: CollectionRepository) {
		logger.info('CollectionService was init');
	}

	createCollection(data: ReqCreateCollectionDto): Promise<ResCollectionDto> {
		return this.collectionRep.createCollection(data);
	}

	getCollection(collectionId: string): Promise<ResCollectionDto> {
		return this.collectionRep.getCollection(collectionId);
	}

	getCollections(): Promise<ResCollectionsDto> {
		return this.collectionRep.getCollections();
	}

	updateCollection(collectionId: string, data: ReqUpdateCollectionDto): Promise<void> {
		return this.collectionRep.updateCollection(collectionId, data);
	}

	deleteCollection(collectionId: string): Promise<void> {
		return this.collectionRep.deleteCollection(collectionId);
	}
}
