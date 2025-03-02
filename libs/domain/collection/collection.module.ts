import { Module } from "@nestjs/common";
import { CollectionService } from "./collection.service";
import { CollectionProvider } from "./providers/collection.provider";

@Module({
  providers: [...CollectionProvider],
  exports: [CollectionService],
})
export class CollectionModule {}
