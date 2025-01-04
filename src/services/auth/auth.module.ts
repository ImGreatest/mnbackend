import { Module } from "@nestjs/common";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { AuthTokenService } from "./token.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfig } from "../../../config/config";
import { AuthController } from "../../controllers/auth/auth.controller";
import { AuthService } from "./auth.service";
import { CryptoService } from "../../../libs/services/crypto/crypto.service";

@Module({
	imports: [
		JwtModule.register({
			global: true,
			secret: JwtConfig.secret,
			signOptions: {
				expiresIn: JwtConfig.expiresIn,
			},
		}),
	],
	providers: [JwtStrategy, AuthTokenService, AuthService, CryptoService],
	controllers: [AuthController],
	exports: [AuthService],
})
export class AuthModule {}
