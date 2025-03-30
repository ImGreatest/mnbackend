import { Module } from '@nestjs/common';
import { UserServiceController } from './user-service.controller';
import { UserModule } from "../../libs/domain/user/user.module";
import { UserService } from "../../libs/domain/user/user.service";
import { UserControllerService } from "./user-service.service";
import { ProfileService } from "../../libs/domain/profile/profile.service";

@Module({
	imports: [UserModule],
	controllers: [UserServiceController],
	providers: [UserService, UserControllerService, ProfileService],
})
export class UserServiceModule {}
