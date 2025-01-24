import { Module } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { UserModule } from "../user/user.module";
import { ProductModule } from "../product/product.module";
import { CollectionModule } from "../collection/collection.module";
import { FavoriteProvider } from "./providers/favorite.provider";

@Module({
  imports: [UserModule, ProductModule, CollectionModule],
  providers: [...FavoriteProvider],
  exports: [FavoriteService],
})
export class FavoriteModule {}
