import { BaseException } from "./base.exception";
import { HttpStatus, ValidationError } from "@nestjs/common";
import { EErrorCode } from "../enum";

export class ValidateException<T> extends BaseException<T> {
	readonly status: number = HttpStatus.BAD_REQUEST;

	constructor(private readonly validationError: ValidationError[]) {
		super(
			EErrorCode.Validate,
			'Not correct data',
			'Not correct data',
			validationError.reduce(
				(constrains, err) => Object.assign(constrains, err.constraints),
				{} as T,
			)
		);
	}
}
