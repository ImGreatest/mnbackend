import { Module } from "@nestjs/common";
import { CryptoModule } from "../../services/crypto/crypto.module";
import { UserService } from "./user.service";
import { UserProvider } from "./providers/user.provider";
import { ProfileModule } from "../profile/profile.module";

@Module({
	imports: [CryptoModule, ProfileModule],
	providers: [...UserProvider],
	exports: [UserService],
})
/**
 * Module class for working with users.
 *
 * @export
 * @class UserModule
 * @see { UserService }
 * @see { UserProvider }
 * @see { CryptoModule }
 */
export class UserModule {}
