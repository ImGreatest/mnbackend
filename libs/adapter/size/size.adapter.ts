import { Injectable } from "@nestjs/common";
import { SizeRepository } from "../../domain/size/repository/size.repository";
import { logger } from "../../../logger/logger";
import { ResSizeDto } from "../../domain/size/dto/res-dto/res-size.dto";
import { PrismaService } from "../../services/prisma/prisma.service";

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
	constructor(private readonly prisma: PrismaService,) {
		super();
	}

	/**
	 * Get sizes, with addition by his name
	 *
	 * @async
	 * @instance
	 * @method getSize
	 * @param { string } name
	 * @type { function(name?: string): Promise@lt;ResSizeDto> }
	 * @returns { Promise&lt;ResSizeDto> }
	 * @see { ResSizeDto }
	 * @see { SizeRepository }
	 */
	async getSize(name?: string): Promise<ResSizeDto[]> {
		logger.info(`Adapter call - getSize method param - ${name}`)

		try {
			const response = await this.prisma.size.findUnique({
				where: {
					name: name,
				},
			});

			return response ? [response] : [];

		} catch (e) {
			return this.prisma.size.findMany();
		}
	}
}
