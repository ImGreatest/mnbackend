import { Provider } from "@nestjs/common";
import { CollectionService } from "../collection.service";
import { CollectionRepository } from "../repositories/collection.repository";
import { CollectionAdapter } from "../../../adapter/collection/collection.adapter";

export const CollectionProvider: Provider[] = [
  CollectionService,
  {
    provide: CollectionRepository,
    useClass: CollectionAdapter,
  },
];
