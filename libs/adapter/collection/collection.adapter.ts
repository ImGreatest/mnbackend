import { Injectable } from "@nestjs/common";
import { CollectionRepository } from "../../domain/collection/repositories/collection.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqCreateCollectionDto } from "../../domain/collection/dto/req-dto/req-create-collection.dto";
import { ResCollectionDto } from "../../domain/collection/dto/res-dto/res-collection.dto";
import { ReqUpdateCollectionDto } from "../../domain/collection/dto/req-dto/req-update-collection.dto";
import { ResCollectionsDto } from "../../domain/collection/dto/res-dto/res-collections.dto";
import { logger } from "../../../logger/logger";

@Injectable()
export class CollectionAdapter extends CollectionRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
		logger.info('CollectionAdapter was init');
	}

	async createCollection(data: ReqCreateCollectionDto): Promise<ResCollectionDto> {
		logger.verbose(`Adapter call - createCollection method, param - ${JSON.stringify(data)}`);

		return this.prisma.collection.create({ data: { ...data } });
	}

	async getCollection(collectionId: string): Promise<ResCollectionDto> {
		logger.verbose(`Adapter call - getCollection method, param - ${JSON.stringify(collectionId)}`);

		return this.prisma.collection.findUnique({ where: { id: collectionId } });
	}

	async getCollections(): Promise<ResCollectionsDto> {
		logger.verbose('Adapter call - getCollections method');

		const collections = await this.prisma.collection.findMany();

		return {
			collections: collections.map(collection => ({
				...collection,
			})),
		}
	}

	async updateCollection(collectionId: string, data: ReqUpdateCollectionDto): Promise<ResCollectionDto> {
		logger.verbose(`Adapter call - updateCollection method, params - ${JSON.stringify(collectionId)}, ${JSON.stringify(data)}`);

		return await this.prisma.collection.update({ where: { id: collectionId }, data: { ...data } });
	}

	async deleteCollection(collectionId: string): Promise<void> {
		logger.verbose(`Adapter call - deleteCollection method, param - ${JSON.stringify(collectionId)}`);

		await this.prisma.collection.delete({ where: { id: collectionId } });
	}
}
