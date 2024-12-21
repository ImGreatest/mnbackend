import { Injectable } from "@nestjs/common";
import { CollectionRepository } from "../../domain/collection/repository/collection.repository";
import { ReqCreateCollectionDto } from "../../domain/collection/dto/req-dto/req-create-collection.dto";
import { ResCollectionDto } from "../../domain/collection/dto/res-dto/res-collection.dto";
import { ResCollectionsDto } from "../../domain/collection/dto/res-dto/res-collections.dto";
import { ReqUpdateCollectionDto } from "../../domain/collection/dto/req-dto/req-update-collection.dto";
import { logger } from "../../../logger/logger";

@Injectable()
export class CollectionMockAdapter extends CollectionRepository {
	constructor() {
		super();
		logger.info('CollectionMockAdapter was init');
	}

	async createCollection(data: ReqCreateCollectionDto): Promise<void> {
		logger.verbose(`CollectionMockAdapter was called createCollection method with param - ${JSON.stringify(data)}`);
		throw new Error(`${JSON.stringify(data)}`);
	}

	async getCollection(collectionId: string): Promise<ResCollectionDto> {
		logger.verbose(`CollectionMockAdapter was called getCollection method with param - ${JSON.stringify(collectionId)}`);
		throw new Error(`${ collectionId }`);
	}

	async getCollections(): Promise<ResCollectionsDto> {
		logger.verbose('CollectionMockAdapter was called getCollections without any params ');
		throw new Error(`Called mock getCollections method`);
	}

	async updateCollection(collectionId: string, data: ReqUpdateCollectionDto): Promise<void> {
		logger.verbose(`CollectionMockAdapter was called updateCollection method with params - ${JSON.stringify(collectionId)}, ${JSON.stringify(data)}`);
		throw new Error(`${ collectionId }, ${{ ...data }}`);
	}

	async deleteCollection(collectionId: string): Promise<void> {
		logger.verbose(`CollectionMockAdapter was called deleteCollection method with param - ${JSON.stringify(collectionId)}`);
		throw new Error(`${collectionId}`);
	}
}
