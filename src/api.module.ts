import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ControllersModule } from "./controllers/controllers.module";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BONUS-PROMO-SERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
      {
        name: 'BOOKING-SERVICE',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
      {
        name: 'FAV-BUCKET-SERVICE',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
      {
        name: 'NOTIFICATION-SERVICE',
        transport: Transport.TCP,
        options: { port: 3004 },
      },
      {
        name: 'ORDER-SERVICE',
        transport: Transport.TCP,
        options: { port: 3005 },
      },
      {
        name: 'PRODUCT-SERVICE',
        transport: Transport.TCP,
        options: { port: 3006 },
      },
      {
        name: 'USER-SERVICE',
        transport: Transport.TCP,
        options: { port: 3007 },
      },
    ]),
    ControllersModule,
  ],
  providers: [ApiService],
})
export class ApiModule {}
