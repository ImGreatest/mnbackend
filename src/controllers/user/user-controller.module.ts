import { Module } from "@nestjs/common";
import { UserModule } from "../../../libs/domain/user/user.module";
import { UserController } from "./user.controller";

@Module({
	imports: [UserModule],
	controllers: [UserController],
})
export class UserControllerModule {}
