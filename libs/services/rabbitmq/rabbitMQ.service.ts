import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { rabbitConfig } from "../../../config/config";

@Injectable()
export class RabbitMQService {
	constructor(
		@Inject('RABBIT_MQ') private readonly client: ClientProxy,
	) {}

	async sendNotification(message: { message: string }) {
		return await this.client.emit(rabbitConfig.QueueName, message.message).toPromise();
	}
}
