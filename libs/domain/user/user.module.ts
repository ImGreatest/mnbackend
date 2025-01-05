import { Module } from "@nestjs/common";
import { CryptoModule } from "../../services/crypto/crypto.module";
import { UserService } from "./user.service";
import { UserRepository } from "./repository/user.repository";
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
/**
 * Module class for working with users.
 *
 * @export
 * @class UserModule
 * @see { UserService }
 * @see { UserRepository }
 * @see { UserAdapter }
 * @see { CryptoModule }
 */
export class UserModule {}
