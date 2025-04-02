import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { DadataService } from "../../../libs/services/dadata/dadata.service";
import { ResSuggestsAddressDto } from "../../../libs/services/dadata/dto/res-dto/res-suggests-address.dto";
import { ReqSuggestsAddressDto } from "../../../libs/services/dadata/dto/req-dto/req-suggests-address.dto";
import { ResCityByIpDto } from "../../../libs/services/dadata/dto/res-dto/res-city-by-ip.dto";
import { ReqCityByIpDto } from "../../../libs/services/dadata/dto/req-dto/req-city-by-ip.dto";
import { ReqStandardizationEmailDto } from "../../../libs/services/dadata/dto/req-dto/req-standardization-email.dto";
import { ResSuggestsEmailDto } from "../../../libs/services/dadata/dto/res-dto/res-suggests-email.dto";
import { ReqSuggestsEmailDto } from "../../../libs/services/dadata/dto/req-dto/req-suggests-email.dto";
import { ReqStandardizationPhoneDto } from "../../../libs/services/dadata/dto/req-dto/req-standardization-phone.dto";

@ApiTags("dadata")
@ApiBearerAuth()
@Controller("dadata")
export class DadataController {
  constructor(private readonly dadataService: DadataService) {}

  @Post("suggest-address")
  @ApiOperation({
    summary: "Do request to dadata api for get suggestions address",
  })
  @ApiBody({
    type: ReqSuggestsAddressDto,
    required: true,
    description: "Data for getting suggests address",
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Request was successful",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Not correct request (Non-valid json or xml)",
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Non-existent API key",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description:
      "The request contains a non-existent API key or daily limit requests has been reached",
  })
  @ApiResponse({
    status: HttpStatus.METHOD_NOT_ALLOWED,
    description: "The request was made with a method other than POST",
  })
  @ApiResponse({
    status: HttpStatus.PAYLOAD_TOO_LARGE,
    description: "Query length too long or too many conditions",
  })
  @ApiResponse({
    status: HttpStatus.TOO_MANY_REQUESTS,
    description: "Too many requests per second or new connections per minute",
  })
  async suggestsAddress(
    @Body() query: ReqSuggestsAddressDto,
  ): Promise<ResSuggestsAddressDto> {
    return this.dadataService.suggestsAddress(query);
  }

  @Post("city-by-ip")
  @ApiOperation({ summary: "Do request to dadata api for get datas city" })
  @ApiBody({
    type: ReqCityByIpDto,
    required: true,
    description: "Data for getting datas about city",
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Request was successful",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Not correct request (Non-valid json or xml)",
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Non-existent API key",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description:
      "The request contains a non-existent API key or daily limit requests has been reached",
  })
  @ApiResponse({
    status: HttpStatus.METHOD_NOT_ALLOWED,
    description: "The request was made with a method other than POST",
  })
  @ApiResponse({
    status: HttpStatus.PAYLOAD_TOO_LARGE,
    description: "Query length too long or too many conditions",
  })
  @ApiResponse({
    status: HttpStatus.TOO_MANY_REQUESTS,
    description: "Too many requests per second or new connections per minute",
  })
  async cityByIp(@Body() query: ReqCityByIpDto): Promise<ResCityByIpDto> {
    return this.dadataService.cityByIp(query);
  }

  @Post("standardization-email")
  @ApiOperation({
    summary: "Do request to dadata api for standardization email",
  })
  @ApiBody({
    type: ReqStandardizationEmailDto,
    required: true,
    description: "Data for checking format email",
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Request was successful",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Not correct request (Non-valid json or xml)",
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Non-existent API key",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description:
      "The request contains a non-existent API key or daily limit requests has been reached",
  })
  @ApiResponse({
    status: HttpStatus.METHOD_NOT_ALLOWED,
    description: "The request was made with a method other than POST",
  })
  @ApiResponse({
    status: HttpStatus.PAYLOAD_TOO_LARGE,
    description: "Query length too long or too many conditions",
  })
  @ApiResponse({
    status: HttpStatus.TOO_MANY_REQUESTS,
    description: "Too many requests per second or new connections per minute",
  })
  async standardizationEmail(
    @Body() query: ReqStandardizationEmailDto,
  ): Promise<[]> {
    return this.dadataService.standardizationEmail(query);
  }

  @Post("suggests-email")
  @ApiOperation({ summary: "Do request to dadata api for get suggests email" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Request was successful",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Not correct request (Non-valid json or xml)",
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Non-existent API key",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description:
      "The request contains a non-existent API key or daily limit requests has been reached",
  })
  @ApiResponse({
    status: HttpStatus.METHOD_NOT_ALLOWED,
    description: "The request was made with a method other than POST",
  })
  @ApiResponse({
    status: HttpStatus.PAYLOAD_TOO_LARGE,
    description: "Query length too long or too many conditions",
  })
  @ApiResponse({
    status: HttpStatus.TOO_MANY_REQUESTS,
    description: "Too many requests per second or new connections per minute",
  })
  async suggestsEmail(
    @Body() query: ReqSuggestsEmailDto,
  ): Promise<ResSuggestsEmailDto> {
    return this.dadataService.suggestsEmail(query);
  }

  @Post("standardization-phone")
  @ApiOperation({
    summary: "Do request to dadata api for standardization phone",
  })
  @ApiBody({
    type: ReqStandardizationPhoneDto,
    required: true,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Request was successful",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Not correct request (Non-valid json or xml)",
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Non-existent API key",
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description:
      "The request contains a non-existent API key or daily limit requests has been reached",
  })
  @ApiResponse({
    status: HttpStatus.METHOD_NOT_ALLOWED,
    description: "The request was made with a method other than POST",
  })
  @ApiResponse({
    status: HttpStatus.PAYLOAD_TOO_LARGE,
    description: "Query length too long or too many conditions",
  })
  @ApiResponse({
    status: HttpStatus.TOO_MANY_REQUESTS,
    description: "Too many requests per second or new connections per minute",
  })
  async standardizationPhone(
    @Body() query: ReqStandardizationPhoneDto,
  ): Promise<[]> {
    return this.dadataService.standardizationPhone(query);
  }
}
