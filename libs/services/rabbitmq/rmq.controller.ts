import { Controller, Post } from "@nestjs/common";
import { Public } from "libs/common/decorators/public.decorator";
import { Observable, Subscription } from "rxjs";
import { RmqService } from "./rmq.service";
import { logger } from "../../../logger/logger";

@Public()
@Controller("notices")
export class RmqController {
	private subscription: Subscription;
	constructor(private readonly rabbit: RmqService) {}

	@Post('send')
	async sendMessage() {
		await this.rabbit.sendMessage('cats_queue', 'pon');
		return `Message sent with pattern`;
	}

	@Post('consume')
	async consumeMessage() {
		const messages: Observable<string> = await this.rabbit.consumeMessages('cats_queue');

		if (this.subscription) this.subscription.unsubscribe();

		this.subscription = messages.subscribe({
			next: (msg) => {
				logger.info(`Message was consumed: ${msg}`);
			},
			error: (err) => {
				logger.error('Error consuming messages: ',err);
			},
			complete: () => {
				logger.info('Message consumption completed');
			},
		});

		return `Started consuming messages with pattern`;
	}

	@Post('stop-consuming')
	stopConsuming() {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
		return 'Stopped consuming';
	}
}
