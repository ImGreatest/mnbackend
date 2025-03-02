import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import * as amqp from 'amqplib';
import { logger } from "../../../logger/logger";
import { Observable, Subject } from "rxjs";

@Injectable()
export class RmqService implements OnModuleInit, OnModuleDestroy {
	private connection: amqp.Connection;
	private channel: amqp.Channel;
	private messageSubject: Subject<string>;

	constructor() {}

	async onModuleInit() {
		try {
			this.connection = await amqp.connect('amqp://localhost:5672');
			this.connection.on('error', (err) =>
				logger.error(`RabbitMQ connection error: `, err),
			)

			this.channel = await this.connection.createChannel();
			this.channel.on('error', (err) =>
				logger.error(`RabbitMQ channel was through error: `, err),
			);

		} catch (err) {
			logger.error(`Failed connection to RabbitMQ: `, err);
		}
		this.channel = await this.connection.createChannel();
	}

	async onModuleDestroy() {
		if (this.channel) {
			await this.channel.close();
			logger.info('Channel was closed');
		}
		if (this.connection) {
			await this.connection.close();
			logger.info('Connection was closed');
		}
	}

	async sendMessage(queue: string, message: string) {
		if (!this.channel) throw new Error('RabbitMQ channel is not init');

		await this.channel.assertQueue(queue, { durable: false });
		this.channel.sendToQueue(queue, Buffer.from(message));
		logger.info(`Message sent to queue ${queue}: ${message}`);
	}

	async consumeMessages(queue: string): Promise<Observable<string>> {
		if (!this.channel) throw new Error('RabbitMQ channel is not init');

		await this.channel.assertQueue(queue, { durable: false });

		await this.channel.consume(queue, (msg) => {
			if (msg) {
				const message = msg.content.toString();
				logger.info(`Received message from queue ${queue}, ${message}`);
				this.messageSubject.next(message);
				this.channel.ack(msg);
			}
		});

		return this.messageSubject.asObservable();
	}

	async purgeQueue(queue: string) {
		try {
			await this.channel.purgeQueue(queue);
			logger.info(`All message from ${queue} was cleaned`);
		} catch (e) {
			logger.error('Error purging the queue: ', e);
		}
	}
}
