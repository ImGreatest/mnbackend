import { Injectable } from "@nestjs/common";
import { ResSizeDto } from "../dto/res-dto/res-size.dto";
import { ResSizesDto } from "../dto/res-dto/res-sizes.dto";

@Injectable()
export abstract class SizeRepository {
  abstract getSize(name?: string): Promise<ResSizeDto | ResSizesDto>;
}
