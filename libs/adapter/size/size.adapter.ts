import { Injectable } from "@nestjs/common";
import { SizeRepository } from "../../domain/size/repositories/size.repository";
import { logger } from "../../../logger/logger";
import { ResSizeDto } from "../../domain/size/dto/res-dto/res-size.dto";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ResSizesDto } from "../../domain/size/dto/res-dto/res-sizes.dto";

@Injectable()
/**
 * A class realise a logical the methods that working with size of cloth.
 *
 * @export
 * @class SizeAdapter
 * @extends { SizeRepository }
 * @see { SizeRepository }
 */
export class SizeAdapter extends SizeRepository {
  /**
   * @constructor
   * @param prisma
   * @see { PrismaService }
   */
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  /**
   * Get sizes, with addition by his name
   *
   * @async
   * @instance
   * @method getSize
   * @param { string } name
   * @type { function(name?: string): Promise@lt;ResSizeDto | ResSizesDto> }
   * @returns { Promise&lt;ResSizeDto | ResSizesDto> }
   * @see { ResSizeDto }
   * @see { ResSizesDto }
   * @see { SizeRepository }
   */
  async getSize(name?: string): Promise<ResSizeDto | ResSizesDto> {
    logger.info(`Adapter call - getSize method param - ${name}`);

    let res: ResSizeDto | ResSizesDto;

    try {
      res = await this.prisma.size.findUnique({
        where: { name: name },
      });
    } catch (e) {
      res = {
        sizes: await this.prisma.size.findMany(),
      };
    }

    return res;
  }
}
