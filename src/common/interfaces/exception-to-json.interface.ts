import { HttpStatus } from "@nestjs/common";
import { EErrorCode } from "../enums";

export interface IExceptionToJson<T> {
	status: HttpStatus,
	code: EErrorCode,
	messageUI: string,
	messageDebug: string,
	data: T,
}
