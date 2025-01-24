import { Injectable } from "@nestjs/common";
import { ReqCreateRelationDto } from "../dto/req-dto/req-create-relation.dto";
import { ReqUpdatedRelationDto } from "../dto/req-dto/req-updated-relation.dto";
import { ResRelationDto } from "../dto/res-dto/res-relation.dto";
import { ResRelationsDto } from "../dto/res-dto/res-relations.dto";

@Injectable()
export abstract class FavoriteRepository {
  abstract createRelation(data: ReqCreateRelationDto): Promise<ResRelationDto>;

  abstract getRelation(id: string): Promise<ResRelationDto>;

  abstract getRelations(userId?: string): Promise<ResRelationsDto>;

  abstract updateRelation(
    id: string,
    data: ReqUpdatedRelationDto,
  ): Promise<ResRelationDto>;

  abstract deleteRelation(id: string): Promise<void>;
}
