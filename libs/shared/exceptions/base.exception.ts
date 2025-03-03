import { EErrorCode } from "../enum";
import { HttpStatus } from "@nestjs/common";
import { logger } from "../../../logger/logger";
import { IExceptionToJson } from "../interfaces/exception-to-json.interface";

export abstract class BaseException<T extends object = object> extends Error {
	abstract readonly status: HttpStatus;
	abstract readonly code: EErrorCode;
	readonly messageUI: string;
	readonly data: T;

	constructor(
		messageDebug: string,
		messageUI: string = 'An error occurred',
		data: T = {} as T,
	) {
		super(messageDebug);
		this.messageUI = messageUI;
		this.data = data;
	}

	toJson(): IExceptionToJson<T> {
		return {
			status: this.status,
			code: this.code,
			messageUI: this.messageUI,
			messageDebug: this.message,
			data: this.data,
		}
	}

	log(): void {
		logger.error(`[${this.code}] ${this.message}`);
		if (Object.keys(this.data).length > 0) {
			logger.error('Additional data:', this.data);
		}
	}
}
