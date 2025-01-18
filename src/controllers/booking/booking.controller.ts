import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { BookingService } from "../../../libs/domain/booking/booking.service";
import { ReqCreateReservationDto } from "../../../libs/domain/booking/dto/req-dto/req-create-reservation.dto";
import { MockReqReservationDto } from "../../../libs/domain/booking/mocks/req-mocks/mock-req-reservation.dto";
import { faker } from "@faker-js/faker";
import { ResReservationDto } from "../../../libs/domain/booking/dto/res-dto/res-reservation.dto";
import { MockResReservationDto } from "../../../libs/domain/booking/mocks/res-mocks/mock-res-reservation.dto";
import { ReqUpdateReservationDto } from "../../../libs/domain/booking/dto/req-dto/req-update-reservation.dto";
import { ResUpdateReservationDto } from "../../../libs/domain/booking/dto/res-dto/res-update-reservation.dto";
import { MockResUpdateReservationDto } from "../../../libs/domain/booking/mocks/res-mocks/mock-res-update-reservation.dto";

@ApiTags("booking")
@ApiBearerAuth()
@Controller("booking")
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post("create-reservation")
  @ApiBody({
    type: ReqCreateReservationDto,
    required: true,
    description: "Data for create new reservation",
    examples: MockReqReservationDto,
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Successfully to create reservation",
    type: null,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Fail to create reservation",
  })
  createReservation(@Body() data: ReqCreateReservationDto): Promise<void> {
    return this.bookingService.createReservation(data);
  }

  @Get("reservation/:id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
    description: "Parameter identifier a reservation",
    example: faker.string.uuid(),
  })
  @ApiQuery({
    name: "userId",
    type: String,
    required: false,
    description: "Optional parameter for more better data sampling",
    example: faker.string.uuid(),
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Return specific reservation",
    type: ResReservationDto,
    isArray: false,
    example: MockResReservationDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "Reservation is not found",
  })
  getReservation(
    @Param("id") reservationId: string,
    @Query("userId") userId?: string,
  ): Promise<ResReservationDto> {
    return this.bookingService.getReservation(reservationId, userId);
  }

  @Get("reservations")
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Returns all reservations",
    type: ResReservationDto,
    isArray: true,
    example: MockResReservationDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "Reservations is not found",
  })
  getReservations(): Promise<ResReservationDto[]> {
    return this.bookingService.getReservations();
  }

  @Get("reservation/:date")
  @ApiParam({
    name: "date",
    type: Date,
    required: true,
    description: "Parameter for sampling reservations by date",
    example: faker.date.past(),
  })
  @ApiQuery({
    name: "userId",
    type: String,
    required: false,
    description:
      "Optional parameter for sampling reservation by identifier user",
    example: faker.string.uuid(),
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Return array of reservations sampled by date",
    type: ResReservationDto,
    isArray: true,
    example: MockResReservationDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "Reservation is not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "",
  })
  getReservationsByDate(
    @Param("date") date: Date,
    @Query("userId") userId?: string,
  ): Promise<ResReservationDto[]> {
    return this.bookingService.getReservationsByDate(date, userId);
  }

  @Put("update-reservation/:id")
  @ApiParam({
    name: "id",
    required: true,
    type: String,
    description: "Identifier reservation for update",
    example: faker.string.uuid(),
  })
  @ApiBody({
    required: true,
    type: ReqUpdateReservationDto,
    description: "Data with new values reservation which will be update",
    examples: MockReqReservationDto,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: ResUpdateReservationDto,
    description: "Reservation updated successfully",
    isArray: false,
    example: MockResUpdateReservationDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "Reservation not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while updating the reservation",
  })
  updateReservation(
    @Param("id") reservationId: string,
    @Body() data: ReqUpdateReservationDto,
  ): Promise<ResUpdateReservationDto> {
    return this.bookingService.updateReservation(reservationId, data);
  }

  @Delete("delete-reservation/:id")
  @ApiParam({
    name: "id",
    type: String,
    required: true,
    description: "Identifier reservation for remove",
    example: faker.string.uuid(),
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    type: null,
    description: "Reservation remove successfully",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "Identifier is not correct. Reservation is not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: "An error occurred while deleting the reservation",
  })
  deleteReservation(@Param("id") reservationId: string): Promise<void> {
    return this.bookingService.deleteReservation(reservationId);
  }
}
