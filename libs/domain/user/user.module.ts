import { Module } from "@nestjs/common";
import { CryptoModule } from "../../services/crypto/crypto.module";
import { UserService } from "./user.service";
import { UserRepository } from "./repositories/user.repository";
import { UserAdapter } from "../../adapter/user/user.adapter";

@Module({
	imports: [CryptoModule],
	providers: [
		UserService,
		{
			provide: UserRepository,
			useClass: UserAdapter,
		},
	],
	exports: [UserService],
})
export class UserModule {}
