import { BaseException } from "./base.exception";
import { HttpStatus } from "@nestjs/common";
import { EErrorCode } from "../enum";

export class UserException<T> extends BaseException<T> {
	readonly status: number = HttpStatus.BAD_REQUEST;

	constructor(
		readonly code: EErrorCode,
		readonly messageUI: string = "Error",
		readonly messageDebug: string = messageUI,
		readonly data: T = {} as T,
	) {
		super(code, messageUI, messageDebug, data);
	}
}
