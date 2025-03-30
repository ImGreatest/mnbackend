import { BaseException } from "./base.exception";
import { HttpStatus } from "@nestjs/common";
import { EErrorCode } from "../enums";
import { NotFoundException } from "./not-found.exception";

export class UpdateUserException<T extends object = object> extends BaseException<T> {
	readonly status: HttpStatus.BAD_REQUEST;
	readonly code = EErrorCode.Validate || EErrorCode.Conflict;

	constructor(data: T = {} as T) {
		super(
			'While updating user, happened error',
			'The user is not updated',
			data,
		);
	}
}

export class NotFoundUserException<T extends object = object> extends NotFoundException<T> {
	constructor(messageDebug: string, data: T = {} as T) {
		super(
			messageDebug,
			'The user is not updated',
			data,
		);
	}
}

export class NotFoundUserByIdentifierException<T extends object = object> extends NotFoundUserException<T> {
	constructor(data: T = {} as T) {
		super(
			'The user is not found by this identifier',
			data,
		);
	}
}

export class NotFoundUserByLoginException<T extends object = object> extends NotFoundUserException<T> {
	constructor(data: T = {} as T) {
	super(
		'The user is not found by this login',
		data,
		);
	}
}

export class NotFoundUserByEmailException<T extends object = object> extends NotFoundUserException<T> {
	constructor(data: T = {} as T) {
		super(
			`The user is not found by this email`,
			data,
		);
	}
}

export class NotFoundUserByPhoneException<T extends object = object> extends NotFoundUserException<T> {
	constructor(data: T = {} as T) {
		super(
			`The user is not found by this phone`,
			data,
		);
	}
}

export class NotFoundProfileException<T extends object = object> extends NotFoundException<T> {
	constructor(data: T = {} as T) {
		super(
			`The user profile is not found with`,
			'The user profile is not found!',
			data,
		);
	}
}
