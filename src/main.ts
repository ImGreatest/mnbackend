import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { logger } from "../logger/logger";
import { config } from "../config/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docConfig = new DocumentBuilder()
    .setTitle('MN Cloth Api')
    .setDescription('Api for mn')
    .setVersion('1.0')
    .addTag('MN')
    .build();
  const doc = SwaggerModule.createDocument(app, docConfig);

  app.enableCors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  SwaggerModule.setup('api', app, doc);

  await app.listen(config.ApiPort);
}
bootstrap().then(r => logger.info(r));
