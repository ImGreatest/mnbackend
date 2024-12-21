import { Injectable } from "@nestjs/common";
import { ReqCreateCollectionDto } from "../dto/req-dto/req-create-collection.dto";
import { ResCollectionDto } from "../dto/res-dto/res-collection.dto";
import { ResCollectionsDto } from "../dto/res-dto/res-collections.dto";
import { ReqUpdateCollectionDto } from "../dto/req-dto/req-update-collection.dto";

@Injectable()
export abstract class CollectionRepository {
	abstract createCollection(data: ReqCreateCollectionDto): Promise<ResCollectionDto>;

	abstract getCollection(collectionId: string): Promise<ResCollectionDto>;

	abstract getCollections(): Promise<ResCollectionsDto>;

	abstract updateCollection(collectionId: string, data: ReqUpdateCollectionDto): Promise<void>;

	abstract deleteCollection(collectionId: string): Promise<void>;
}
