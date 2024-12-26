import { Module } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { FavoriteAdapter } from "../../adapter/favorite/favorite.adapter";
import { FavoriteRepository } from "./repository/favorite.repository";

@Module({
	providers: [
		FavoriteService,
		{
			provide: FavoriteRepository,
			useClass: FavoriteAdapter,
		},
	],
	exports: [FavoriteService],
})
export class FavoriteModule {}
