import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserProvider } from "./providers/user.provider";
import { CryptoModule } from "../../../services/crypto/crypto.module";
import { PrismaModule } from "../../../services/prisma/prisma.module";

@Module({
	imports: [CryptoModule, PrismaModule],
	providers: [...UserProvider],
	exports: [UserService],
})
export class UserModule {}
