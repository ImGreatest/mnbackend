import { Module } from "@nestjs/common";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { AuthTokenService } from "./token.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfig } from "../../../config/config";
import { CryptoModule } from "../../../libs/services/crypto/crypto.module";
import { AuthController } from "../../controllers/auth/auth.controller";
import { AuthService } from "./auth.service";

@Module({
	imports: [
		JwtModule.register({
			secret: JwtConfig.secret,
			signOptions: {
				expiresIn: JwtConfig.expiresIn,
			},
		}),
		CryptoModule,
	],
	providers: [JwtStrategy, AuthTokenService, AuthService],
	controllers: [AuthController],
	exports: [AuthService],
})
export class AuthModule {}
