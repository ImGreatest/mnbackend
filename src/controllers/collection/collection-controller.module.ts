import { Module } from "@nestjs/common";
import { CollectionController } from "./collection.controller";
import { CollectionModule } from "../../../libs/domain/collection/collection.module";

@Module({
	imports: [CollectionModule],
	controllers: [CollectionController],
})
export class CollectionControllerModule {}
