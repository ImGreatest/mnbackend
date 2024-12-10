import { Module } from "@nestjs/common";
import { SizeController } from "./size.controller";
import { SizeModule } from "../../../libs/domain/size/size.module";

@Module({
	imports: [SizeModule],
	controllers: [SizeController],
})
export class SizeControllerModule {}
