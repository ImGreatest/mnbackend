import { Injectable } from "@nestjs/common";
import { ResSizeDto } from "../dto/res-dto/res-size.dto";

@Injectable()
export abstract class SizeRepository {
	abstract getSize(name?: string): Promise<ResSizeDto[]>;
}
