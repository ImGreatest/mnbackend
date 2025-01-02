import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { SizeService } from "../../../libs/domain/size/size.service";
import { faker } from "@faker-js/faker";
import { ESize } from "../../../libs/domain/size/enum/size.enum";
import { ResSizeDto } from "../../../libs/domain/size/dto/res-dto/res-size.dto";
import { MockResSizesDto } from "../../../libs/domain/size/mocks/mock-res-sizes.dto";
import { ResSizesDto } from "../../../libs/domain/size/dto/res-dto/res-sizes.dto";

@ApiTags("size")
@ApiBearerAuth()
@Controller("size")
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Get("sizes")
  @ApiQuery({
    name: "name",
    type: String,
    required: false,
    example:
      ESize[
        faker.number.int({
          min: 0,
          max: Object.keys(ESize).length,
        })
      ],
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Returns sizes",
    type: ResSizeDto,
    isArray: true,
    example: MockResSizesDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "Sizes not found",
  })
  getSize(@Query("name") name?: string): Promise<ResSizeDto | ResSizesDto> {
    return this.sizeService.getSize(name);
  }
}
