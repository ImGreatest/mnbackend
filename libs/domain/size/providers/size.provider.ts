import { Provider } from "@nestjs/common";
import { SizeService } from "../size.service";
import { SizeRepository } from "../repositories/size.repository";
import { SizeAdapter } from "../../../adapter/size/size.adapter";

export const SizeProvider: Provider[] = [
  SizeService,
  {
    provide: SizeRepository,
    useClass: SizeAdapter,
  },
];
