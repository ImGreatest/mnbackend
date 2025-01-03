import { Module } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { FavoriteAdapter } from "../../adapter/favorite/favorite.adapter";
import { FavoriteRepository } from "./repository/favorite.repository";
import { UserModule } from "../user/user.module";
import { ProductModule } from "../product/product.module";
import { CollectionModule } from "../collection/collection.module";

@Module({
	imports: [UserModule, ProductModule, CollectionModule],
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
