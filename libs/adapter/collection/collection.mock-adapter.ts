import { Injectable } from "@nestjs/common";
import { CollectionRepository } from "../../domain/collection/repository/collection.repository";
import { ReqCreateCollectionDto } from "../../domain/collection/dto/req-dto/req-create-collection.dto";
import { ResCollectionDto } from "../../domain/collection/dto/res-dto/res-collection.dto";
import { ResCollectionsDto } from "../../domain/collection/dto/res-dto/res-collections.dto";
import { ReqUpdateCollectionDto } from "../../domain/collection/dto/req-dto/req-update-collection.dto";

@Injectable()
export class CollectionMockAdapter extends CollectionRepository {
	constructor() {
		super();
	}

	async createCollection(data: ReqCreateCollectionDto): Promise<void> {
		throw new Error(`${{ ...data }}`);
	}

	async getCollection(collectionId: string): Promise<ResCollectionDto> {
		throw new Error(`${ collectionId }`);
	}

	async getCollections(): Promise<ResCollectionsDto> {
		throw new Error(`Called mock getCollections method`);
	}

	async updateCollection(collectionId: string, data: ReqUpdateCollectionDto): Promise<void> {
		throw new Error(`${ collectionId }, ${{ ...data }}`);
	}

	async deleteCollection(collectionId: string): Promise<void> {
		throw new Error(`${collectionId}`);
	}
}
