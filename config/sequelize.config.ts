import { databaseConfig } from "./database.config";

module.exports = {
  development: {
    ...databaseConfig,
  },
  test: {
    ...databaseConfig,
  },
  production: {
    ...databaseConfig,
  },
};
