import { Controller, Get, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { Public } from "libs/decorators";

@Public()
@ApiTags("server")
@Controller("server")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("ping")
  ping(@Req() request: Request): Promise<string> {
    return this.appService.pong();
  }
}
