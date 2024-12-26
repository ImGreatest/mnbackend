import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { FavoriteService } from "../../../libs/domain/favorite/favorite.service";
import { ReqCreateRelationDto } from "../../../libs/domain/favorite/dto/req-dto/req-create-relation.dto";
import { ResRelationDto } from "../../../libs/domain/favorite/dto/res-dto/res-relation.dto";
import { ResRelationsDto } from "../../../libs/domain/favorite/dto/res-dto/res-relations.dto";
import { ReqUpdatedRelationDto } from "../../../libs/domain/favorite/dto/req-dto/req-updated-relation.dto";

@ApiTags('favorite')
@ApiBearerAuth()
@Controller('favorite')
export class FavoriteController {
	constructor(private readonly favoriteService: FavoriteService ) {}

	@Post('create-relation')
	createRelation(@Body() data: ReqCreateRelationDto): Promise<void> {
		return this.favoriteService.createRelation(data);
	}

	@Get('get-relation/:id')
	getRelation(@Param('id') id: string): Promise<ResRelationDto> {
		return this.favoriteService.getRelation(id);
	}

	@Get('get-relations')
	getRelations(@Query('id') userId?: string): Promise<ResRelationsDto> {
		return this.favoriteService.getRelations(userId);
	}

	@Post('update-relation/:id')
	updateRelation(@Param('id') id: string, @Body() data: ReqUpdatedRelationDto): Promise<void> {
		return this.favoriteService.updateRelation(id, data);
	}

	@Delete('delete-relation/:id')
	deleteRelation(@Param('id') id: string): Promise<void> {
		return this.favoriteService.deleteRelation(id);
	}
}
