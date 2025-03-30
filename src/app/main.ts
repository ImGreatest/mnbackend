import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user/user-service.module';
import { Transport } from "@nestjs/microservices";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { config } from "../config/config";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserServiceModule, {
    transport: Transport.TCP,
    options: { port: config.MicroservicePort },
  });

  const httpApp = await NestFactory.create(UserServiceModule);

  const configDoc = new DocumentBuilder()
    .setTitle('User service API')
    .setVersion('1.0.0')
    .build()

  const doc = SwaggerModule.createDocument(httpApp, configDoc);
  SwaggerModule.setup('api', httpApp, doc);

  await httpApp.listen(config.MicroservicePort);

  await app.listen();
}
bootstrap();
