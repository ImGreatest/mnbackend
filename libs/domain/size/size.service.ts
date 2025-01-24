import { Injectable } from "@nestjs/common";
import { SizeRepository } from "./repositories/size.repository";
import { ResSizeDto } from "./dto/res-dto/res-size.dto";
import { ResSizesDto } from "./dto/res-dto/res-sizes.dto";

@Injectable()
export class SizeService {
  constructor(private readonly sizeRepository: SizeRepository) {}

  getSize(name?: string): Promise<ResSizeDto | ResSizesDto> {
    return this.sizeRepository.getSize(name);
  }
}
