import { Injectable } from "@nestjs/common";
import { CollectionRepository } from "../../domain/collection/repository/collection.repository";
import { ResCollectionDto } from "../../domain/collection/dto/res-dto/res-collection.dto";
import { ResCollectionsDto } from "../../domain/collection/dto/res-dto/res-collections.dto";
import { ReqUpdateCollectionDto } from "../../domain/collection/dto/req-dto/req-update-collection.dto";
import { logger } from "../../../logger/logger";
import { ICollection } from "../../shared/entity";

@Injectable()
export class CollectionMockAdapter extends CollectionRepository {
	constructor(private collections: ResCollectionDto[] = []) {
		super();
		this.collections = collections;
		logger.info('CollectionMockAdapter was init');
	}

	async createCollection(data: ICollection): Promise<ResCollectionDto> {
		logger.verbose(`CollectionMockAdapter was called createCollection method with param - ${JSON.stringify(data)}`);

		this.collections.push(data);

		logger.verbose(`collections - ${JSON.stringify(this.collections)}, ${JSON.stringify(data)}`);

		return this.collections[-1];
	}

	async getCollection(collectionId: string): Promise<ResCollectionDto | null> {
		logger.verbose(`CollectionMockAdapter was called getCollection method with param - ${JSON.stringify(collectionId)}`);

		return this.collections.find(collection => collection.id === collectionId) || null;
	}

	async getCollections(): Promise<ResCollectionsDto> {
		logger.verbose('CollectionMockAdapter was called getCollections without any params ');

		return {
			collections: this.collections,
		};
	}

	async updateCollection(collectionId: string, data: ReqUpdateCollectionDto): Promise<ResCollectionDto> {
		logger.verbose(`CollectionMockAdapter was called updateCollection method with params - ${JSON.stringify(collectionId)}, ${JSON.stringify(data)}`);

		const idx = this.collections.findIndex(collection => collection.id === collectionId);

		if (idx !== -1) {
			this.collections[idx] = {
				...this.collections[idx],
				...data,
			};
		}

		throw new Error(`${JSON.stringify(collectionId)}, ${JSON.stringify(data)}`);
	}

	async deleteCollection(collectionId: string): Promise<void> {
		logger.verbose(`CollectionMockAdapter was called deleteCollection method with param - ${JSON.stringify(collectionId)}`);

		this.collections = this.collections.filter(collection => collection.id !== collectionId);
	}
}
