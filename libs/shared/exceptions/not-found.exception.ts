import { BaseException } from "./base.exception";
import { HttpStatus } from "@nestjs/common";
import { EErrorCode } from "../enum";

export class NotFoundException<T extends object = object> extends BaseException<T> {
	readonly status = HttpStatus.NOT_FOUND;
	readonly code = EErrorCode.NotFound;

	constructor(messageDebug: string, messageUI: string, data: T = {} as T) {
		super(messageDebug, messageUI, data);
	}
}