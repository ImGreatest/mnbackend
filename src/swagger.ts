import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function swagger(app: INestApplication): INestApplication {
  const cfg = new DocumentBuilder()
    .setTitle("MN Cloth API")
    .setVersion("0.1.1")
    .addBearerAuth()
    .addTag("MN")
    .build();
  const doc = SwaggerModule.createDocument(app, cfg);

  SwaggerModule.setup("api", app, doc);

  return app;
}
