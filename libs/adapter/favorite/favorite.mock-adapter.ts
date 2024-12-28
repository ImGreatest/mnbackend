import { Injectable } from "@nestjs/common";
import { FavoriteRepository } from "../../domain/favorite/repository/favorite.repository";
import { ReqCreateRelationDto } from "../../domain/favorite/dto/req-dto/req-create-relation.dto";
import { ReqUpdatedRelationDto } from "../../domain/favorite/dto/req-dto/req-updated-relation.dto";
import { logger } from "../../../logger/logger";
import { ResRelationsDto } from "../../domain/favorite/dto/res-dto/res-relations.dto";
import { ResRelationDto } from "../../domain/favorite/dto/res-dto/res-relation.dto";

@Injectable()
export class FavoriteMockAdapter extends FavoriteRepository {
	constructor() {
		super();
		logger.info('FavoriteMockAdapter was init');
	}

	createRelation(data: ReqCreateRelationDto): Promise<ResRelationDto> {
		logger.verbose(`FavoriteMockAdapter was called createRelation with param - ${JSON.stringify(data)}`);
		throw new Error(`${JSON.stringify(data)}`);
	}

	getRelation(id: string): Promise<ResRelationDto> {
		logger.verbose(`FavoriteMockAdapter was called getRelation with param - ${JSON.stringify(id)}`);
		throw new Error(`${JSON.stringify(id)}`);
	}

	getRelations(userId?: string): Promise<ResRelationsDto> {
		if (userId) {
			logger.verbose(`FavoriteMockAdapter was called getRelations with param - ${userId}`);
		} else {
			logger.verbose('FavoriteMockAdapter was called getRelations without params');
		}
		throw new Error(`${JSON.stringify(userId)}`);
	}

	updateRelation(id: string, data: ReqUpdatedRelationDto): Promise<void> {
		logger.verbose(`FavoriteMockAdapter was called updateRelation with params - ${JSON.stringify(id)}, ${JSON.stringify(data)}`);
		throw new Error(`${JSON.stringify(id)}, ${JSON.stringify(data)}`);
	}

	deleteRelation(id: string): Promise<void> {
		logger.verbose(`FavoriteMockAdapter was called deleteRelation with param - ${JSON.stringify(id)}`);
		throw new Error(`${JSON.stringify(id)}`);
	}
}
