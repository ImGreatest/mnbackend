import { Module } from "@nestjs/common";
import { UserServiceController } from "./user-service.controller";

@Module({
	imports: [
		UserServiceController,
	],
})
export class ControllersModule {}