import { Injectable } from "@nestjs/common";
import { FavoriteRepository } from "./repository/favorite.repository";
import { logger } from "../../../logger/logger";
import { ReqCreateRelationDto } from "./dto/req-dto/req-create-relation.dto";
import { ResRelationDto } from "./dto/res-dto/res-relation.dto";
import { ResRelationsDto } from "./dto/res-dto/res-relations.dto";
import { ReqUpdatedRelationDto } from "./dto/req-dto/req-updated-relation.dto";

@Injectable()
export class FavoriteService {
	constructor(private readonly favoriteRep: FavoriteRepository) {
		logger.info('FavoriteService was init');
	}

	createRelation(data: ReqCreateRelationDto): Promise<ResRelationDto> {
		return this.favoriteRep.createRelation(data);
	}

	getRelation(id: string): Promise<ResRelationDto> {
		return this.favoriteRep.getRelation(id);
	}

	getRelations(userId?: string): Promise<ResRelationsDto> {
		return this.favoriteRep.getRelations(userId);
	}

	updateRelation(id: string, data: ReqUpdatedRelationDto): Promise<void> {
		return this.favoriteRep.updateRelation(id, data);
	}

	deleteRelation(id: string): Promise<void> {
		return this.favoriteRep.deleteRelation(id);
	}
}
