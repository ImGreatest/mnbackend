import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  ValidationPipe,
} from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { TokenService } from "./token.service";
import { Public } from "libs/common/decorators/public.decorator";
import { SignInDto } from "./dto/sign-in.dto";
import { AuthDataDto } from "./dto/auth-data.dto";
import { ResSignDto } from "./dto/res-sign.dto";
import { ReqRefreshDto } from "./dto/req-refresh.dto";
import { ReqSignUpDto } from "./dto/sign-up.dto";
import { ResSignUpDto } from "./dto/res-sign-up.dto";
import { ReqResetPasswordDto } from "./dto/req-reset-password.dto";

@ApiTags("auth")
@ApiBearerAuth()
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  @Public()
  @Post("signIn")
  @ApiBody({ type: SignInDto })
  signIn(@Body(new ValidationPipe()) data: SignInDto): Promise<AuthDataDto> {
    return this.authService.signIn(data);
  }

  @Public()
  @Post("refresh")
  refresh(@Body() data: ReqRefreshDto): Promise<ResSignDto> {
    return this.tokenService.refresh(data);
  }

  @Public()
  @Post("sign-up")
  @ApiBody({ type: ReqSignUpDto })
  signUp(
    @Body(new ValidationPipe()) data: ReqSignUpDto,
  ): Promise<ResSignUpDto> {
    return this.authService.signUp(data);
  }

  @Put("reset-password")
  @ApiBody({ type: ReqResetPasswordDto })
  resetPassword(@Body() data: ReqResetPasswordDto): Promise<void> {
    return this.authService.resetPassword(data);
  }

  @Get("test-auth")
  testAuth(): string {
    return "Вы авторизованы";
  }
}
