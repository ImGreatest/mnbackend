import { Injectable } from "@nestjs/common";
import { SizeRepository } from "../../domain/size/repositories/size.repository";
import { ResSizeDto } from "../../domain/size/dto/res-dto/res-size.dto";
import { logger } from "../../../logger/logger";
import { ResSizesDto } from "../../domain/size/dto/res-dto/res-sizes.dto";

@Injectable()
export class SizeMockAdapter extends SizeRepository {
  constructor() {
    super();
    logger.info("SizeMockAdapter was init");
  }

  async getSize(name?: string): Promise<ResSizeDto | ResSizesDto> {
    logger.verbose(`SizeMockAdapter call getSize method with param - ${name}`);

    if (name) {
      throw new Error(`${JSON.stringify(name)}`);
    } else {
      throw new Error();
    }
  }
}
