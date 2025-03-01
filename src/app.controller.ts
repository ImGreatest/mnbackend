import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";
import { Public } from "libs/decorators";
import { RabbitMQService } from "../libs/services/rabbitmq/rabbitMQ.service";

@Public()
@ApiTags("server")
@Controller("server")
export class AppController {
  constructor(private readonly appService: AppService, private readonly rabbitMQService: RabbitMQService) {}

  @Get("ping")
  ping(@Req() request: Request): Promise<string> {
    return this.appService.pong();
  }

  @Post('test-send-notification')
  async sendNotification(): Promise<string> {
    await this.rabbitMQService.sendNotification({ message: 'pon' });
    return 'Notification was sent to rabbitmq';
  }
}
