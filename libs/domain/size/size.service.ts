import { Injectable } from "@nestjs/common";
import { SizeRepository } from "./repository/size.repository";
import { ResSizeDto } from "./dto/res-dto/res-size.dto";

@Injectable()
export class SizeService {
	constructor(private readonly sizeRepository: SizeRepository) {}

	getSize(name?: string): Promise<ResSizeDto[]> {
		return this.sizeRepository.getSize(name);
	}
}
