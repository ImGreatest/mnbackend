import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  app.enableCors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  const cfg = new DocumentBuilder()
    .setTitle("MN Cloth API")
    .setVersion("0.1.1")
    .addBearerAuth()
    .build();
  const doc = SwaggerModule.createDocument(app, cfg);

  SwaggerModule.setup("api", app, doc);

  await app.listen(3000);
}
bootstrap();
