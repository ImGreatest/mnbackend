import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { logger } from "../logger/logger";
import { config } from "../config/config";
import { swagger } from "./swagger";
import * as fs from "fs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: fs.readFileSync("./cert.key"),
      cert: fs.readFileSync("./cert.crt"),
    },
  });

  app.setGlobalPrefix("api");
  app.enableCors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  swagger(app);

  await app.listen(config.PostgresPort);
}
bootstrap().then(() => {
  const url = `https://${config.DatabaseHost}:${config.ApiPort}/api`;
  const link = `\u001b]8;;${url}\u001b\\Api way ${url}\u001b]8;;\u001b\\`;
  logger.info(link);
});
