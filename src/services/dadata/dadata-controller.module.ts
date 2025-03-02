import { Module } from "@nestjs/common";
import { DadataModule } from "../../../libs/services/dadata/dadata.module";
import { DadataController } from "./dadata.controller";

@Module({
  imports: [DadataModule],
  controllers: [DadataController],
})
export class DadataControllerModule {}
