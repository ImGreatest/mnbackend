// import { NestFactory } from '@nestjs/core';
// import { AppModule } from "../src/app.module";
// import { config } from "../config/config";
// import axios from "axios";
// import * as assert from "node:assert";
//
// let server: any;
//
// beforeEach(async () => {
//   const app = await NestFactory.create(AppModule);
//   server = await app.listen(config.PostgresPort);
// });
//
// after(async () => {
//   await server.close();
// });
//
// describe('ping', () => {
//   it('it should return "pong"', async () => {
//     const res = await axios.get(`http://localhost:${config.PostgresPort}/server/ping`)
//
//     assert.equal(res.status, 200);
//     assert.equal(typeof res.data, 'string');
//     assert.equal(res.data, 'ping');
//   });
// });
