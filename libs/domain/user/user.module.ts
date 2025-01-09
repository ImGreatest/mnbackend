import { Module } from "@nestjs/common";
import { CryptoModule } from "../../services/crypto/crypto.module";
import { UserService } from "./user.service";
import { UserProvider } from "./providers/user.provider";

@Module({
	imports: [CryptoModule],
	providers: [...UserProvider],
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
