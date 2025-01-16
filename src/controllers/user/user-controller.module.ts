import { Module } from "@nestjs/common";
import { UserModule } from "../../../libs/domain/user/user.module";
import { UserController } from "./user.controller";
import { ProfileModule } from "../../../libs/domain/profile/profile.module";

@Module({
  imports: [UserModule, ProfileModule],
  controllers: [UserController],
})
export class UserControllerModule {}
