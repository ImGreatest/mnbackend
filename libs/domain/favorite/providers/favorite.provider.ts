import { Provider } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { FavoriteRepository } from "./repository/favorite.repository";
import { FavoriteAdapter } from "../../adapter/favorite/favorite.adapter";

export const FavoriteProvider: Provider[] = [
	FavoriteService,
	{
		provide: FavoriteRepository,
		useClass: FavoriteAdapter,
	},
];
