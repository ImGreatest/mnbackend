import { Module } from "@nestjs/common";
import { CollectionService } from "./collection.service";
import { CollectionRepository } from "./repository/collection.repository";
import { CollectionAdapter } from "../../adapter/collection/collection.adapter";

@Module({
	providers: [
		CollectionService,
		{
			provide: CollectionRepository,
			useClass: CollectionAdapter,
		},
	],
	exports: [CollectionService],
})
export class CollectionModule {}
