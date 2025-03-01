import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { RabbitMQService } from "./rabbitMQ.service";
import { rabbitConfig } from "../../../config/config";

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'RABBIT_MQ',
				transport: Transport.RMQ,
				options: {
					urls: [rabbitConfig.Host + rabbitConfig.Port.toString()],
					queue: rabbitConfig.QueueName,
					queueOptions: {
						durable: false,
					},
				},
			}
		]),
	],
	providers: [RabbitMQService],
	exports: [RabbitMQService],
})
export class RabbitMQModule {}
