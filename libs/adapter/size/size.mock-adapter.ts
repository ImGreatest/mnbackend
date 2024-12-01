import { Injectable } from "@nestjs/common";
import { SizeRepository } from "../../domain/size/repository/size.repository";
import { ResSizeDto } from "../../domain/size/dto/res-dto/res-size.dto";

@Injectable()
export class SizeMockAdapter extends SizeRepository {
	constructor() {
		super();
	}

	async getSize(name?: string): Promise<ResSizeDto[]> {
		throw new Error(`${name}`);
	}
}
