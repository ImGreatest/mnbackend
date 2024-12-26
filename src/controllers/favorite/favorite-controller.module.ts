import { Module } from "@nestjs/common";
import { FavoriteController } from "./favorite.controller";
import { FavoriteModule } from "../../../libs/domain/favorite/favorite.module";

@Module({
	imports: [FavoriteModule],
	controllers: [FavoriteController],
})
export class FavoriteControllerModule {}
