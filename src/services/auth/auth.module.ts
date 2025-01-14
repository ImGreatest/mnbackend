import { Module } from "@nestjs/common";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { TokenService } from "./token.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfig } from "../../../config/config";
import { AuthService } from "./auth.service";
import { CryptoService } from "../../../libs/services/crypto/crypto.service";
import { UserModule } from "../../../libs/domain/user/user.module";
import { AuthController } from "./auth.controller";

@Module({
	imports: [
		UserModule,
		JwtModule.register({
			global: true,
			secret: JwtConfig.secret,
			signOptions: {
				expiresIn: JwtConfig.expiresIn,
			},
		}),
	],
	providers: [JwtStrategy, TokenService, AuthService, CryptoService],
	controllers: [AuthController],
	exports: [AuthService],
})
export class AuthModule {}
