require("ts-node/register");
const { databaseConfig } = require("../config/database.config.ts");

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
