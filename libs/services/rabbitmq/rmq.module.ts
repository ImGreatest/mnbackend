import { Global, Module } from "@nestjs/common";
import { RmqService } from "./rmq.service";
import { RmqController } from "./rmq.controller";

@Global()
@Module({
	providers: [RmqService],
	controllers: [RmqController],
	exports: [RmqService],
})
export class RmqModule {}
