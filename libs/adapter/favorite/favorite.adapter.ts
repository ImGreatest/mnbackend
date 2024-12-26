import { Injectable } from "@nestjs/common";
import { FavoriteRepository } from "../../domain/favorite/repository/favorite.repository";
import { ReqCreateRelationDto } from "../../domain/favorite/dto/req-dto/req-create-relation.dto";
import { ReqUpdatedRelationDto } from "../../domain/favorite/dto/req-dto/req-updated-relation.dto";
import { PrismaService } from "../../services/prisma/prisma.service";
import { logger } from "../../../logger/logger";
import { ResRelationDto } from "../../domain/favorite/dto/res-dto/res-relation.dto";
import { ResRelationsDto } from "../../domain/favorite/dto/res-dto/res-relations.dto";

@Injectable()
export class FavoriteAdapter extends FavoriteRepository {
	constructor(private readonly prisma: PrismaService) {
		super();
		logger.info('FavoriteAdapter was init');
	}

	async createRelation(data: ReqCreateRelationDto): Promise<void> {
		logger.verbose(`Adapter call - createRelation with param - ${JSON.stringify(data)}`);

		await this.prisma.favorite.create({
			data: { ...data },
		});
	}

	async getRelation(id: string): Promise<ResRelationDto> {
		logger.verbose(`Adapter call - getRelation with param - ${JSON.stringify(id)}}`);

		return  this.prisma.favorite.findUnique({
			where: {
				id: id,
			},
		});
	}

	async getRelations(userId?: string): Promise<ResRelationsDto> {
		if (userId) {
			logger.verbose(`Adapter call getRelations with param - ${JSON.stringify(userId)}`);
		} else {
			logger.verbose('Adapter call getRelations');
		}

		const relations = await this.prisma.favorite.findMany();

		return {
			relations: relations.map(relation => ({
				...relation,
			})),
		}
	}

	async updateRelation(id: string, data: ReqUpdatedRelationDto): Promise<void> {
		logger.verbose(`Adapter call updateRelation with params - ${JSON.stringify(id)}, ${JSON.stringify(data)}`);

		await this.prisma.favorite.update({
			where: { id: id },
			data: { ...data },
		});
	}

	async deleteRelation(id: string): Promise<void> {
		logger.verbose(`Adapter call deleteRelation with param - ${JSON.stringify(id)}`);

		await this.prisma.favorite.delete({ where: { id: id } });
	}
}
