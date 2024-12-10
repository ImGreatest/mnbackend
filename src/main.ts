import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from "../logger/logger";
import { config } from "../config/config";
import { swagger } from "./swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  swagger(app);

  await app.listen(config.PostgresPort);
}
bootstrap().then(r => logger.info(r));
