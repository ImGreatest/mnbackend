import { Body, Controller, HttpCode, HttpStatus, Post, ValidationPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "../../services/auth/auth.service";
import { Public } from "libs/decorators/public.decorator";
import { SignInDto } from "../../services/auth/dto/sign-in.dto";
import { AuthDataDto } from "../../services/auth/dto/auth-data.dto";
import { RefreshDataDto } from "../../services/auth/dto/refresh-data.dto";

@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Public()
	@Post('signIn')
	@HttpCode(HttpStatus.OK)
	@ApiBody({
		type: SignInDto,
	})
	signIn(@Body(new ValidationPipe()) signInDto: SignInDto): Promise<AuthDataDto> {
		return this.authService.signIn(signInDto);
	}

	@Public()
	@Post('refresh')
	refresh(@Body() data: RefreshDataDto): Promise<AuthDataDto> {
		return this.authService.refresh(data);
	}
}
