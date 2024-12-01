import { Injectable } from "@nestjs/common";
import { SizeRepository } from "./repository/size.repository";
import { ResSizeDto } from "./dto/res-dto/res-size.dto";

@Injectable()
export class SizeService extends SizeRepository {
	constructor(private readonly sizeRepository: SizeRepository) {
		super();
	}

	async getSize(name?: string): Promise<ResSizeDto[]> {
		return this.sizeRepository.getSize(name);
	}
}
