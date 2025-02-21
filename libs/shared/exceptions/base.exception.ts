import { EErrorCode } from "../enum";

export abstract class BaseException<T> {
	abstract readonly status: number;

	constructor(
		readonly code: EErrorCode = EErrorCode.Unknown,
		readonly messageUI: string = 'Error',
		readonly messageDebug: string = messageUI,
		readonly data: T = {} as T,
	) {}

	toString(): string {
		return this.messageDebug;
	}
}
