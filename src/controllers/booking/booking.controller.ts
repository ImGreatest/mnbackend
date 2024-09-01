import { ApiBody, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from "@nestjs/common";
import { ReqCreateReservationDto } from "../../../libs/domain/booking/dto/req/req-create-reservation.dto";
import { BookingService } from "../../../libs/domain/booking/booking.service";
import { ResReservationDto } from "../../../libs/domain/booking/dto/res/res-reservation.dto";
import { ReqUpdateReservationDto } from "../../../libs/domain/booking/dto/req/req-update-reservation.dto";
import { ResUpdatedReservationDto } from "../../../libs/domain/booking/dto/res/res-updated-reservation.dto";
import { mockReqReservationDto } from "../../../libs/domain/booking/mocks/req/mock-req-reservation.dto";
import { mockResReservationDto } from "../../../libs/domain/booking/mocks/res/mock-res-reservation.dto";
import { mockResUpdatedReservationDto } from "../../../libs/domain/booking/mocks/res/mock-res-updated-reservation.dto";
import { faker } from "@faker-js/faker";

@ApiTags('booking')
@Controller('booking')
export class BookingController {
	constructor(private readonly bookingService: BookingService) {}

	@Post('create-reservation')
	@ApiBody({
		type: ReqCreateReservationDto,
		required: true,
		description: 'Data for create reservation',
		examples: mockReqReservationDto,
	})
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'Successfully to create reservation',
		type: null,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Fail to create reservation',
	})
	createReservation(data: ReqCreateReservationDto): Promise<void> {
		return this.bookingService.createReservation(data);
	}

	@Get('reservation/:id')
	@ApiParam({
		name: 'id',
		type: String,
		required: true,
		description: 'Parameter identifier a reservation',
		example: faker.string.uuid(),
	})
	@ApiQuery({
		name: 'userId',
		type: String,
		required: false,
		description: 'Optional parameter for more better data sampling',
		example: faker.string.uuid(),
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Return specific reservation',
		type: ResReservationDto,
		isArray: false,
		example: mockResReservationDto,
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Reservation is not found',
	})
	getReservation(
		@Param('id') reservationId: string,
		@Query('userId') userId?: string,
	): Promise<ResReservationDto> {
		return this.bookingService.getReservation(reservationId, userId);
	}

	@Get('reservations')
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Return all reservations',
		type: ResReservationDto,
		isArray: true,
		example: mockResReservationDto,
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Reservations is not found',
	})
	getReservations(): Promise<ResReservationDto[]> {
		return this.bookingService.getReservations();
	}

	@Get('reservation/:date')
	@ApiParam({
		name: 'date',
		type: Date,
		required: true,
		description: 'Parameter for sampling reservations by date',
		example: faker.date.past(),
	})
	@ApiQuery({
		name: 'userId',
		type: String,
		required: false,
		description: 'Optional parameter for sampling reservation by identifier user',
		example: faker.string.uuid(),
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Return array of reservations sampled by date',
		type: ResReservationDto,
		isArray: true,
		example: mockResReservationDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Reservation is not found',
	})
	@ApiResponse({
		status: HttpStatus.INTERNAL_SERVER_ERROR,
		description: '',
	})
	getReservationsByDate(
		@Param('date') date: Date,
		@Query('userId') userId?: string
	): Promise<ResReservationDto[]> {
		return this.bookingService.getReservationsByDate(date, userId);
	}

	@Put('update-reservation/:id')
	@ApiParam({
		name: 'id',
		required: true,
		type: String,
		description: 'Identifier reservation for update',
		example: faker.string.uuid(),
	})
	@ApiBody({
		required: true,
		type: ReqUpdateReservationDto,
		description: 'Data with new values reservation which will be update',
		examples: mockReqReservationDto,
	})
	@ApiResponse({
		status: HttpStatus.OK,
		type: ResUpdatedReservationDto,
		description: 'Reservation updated successfully',
		isArray: false,
		example: mockResUpdatedReservationDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data'
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Reservation not found',
	})
	@ApiResponse({
		status: HttpStatus.INTERNAL_SERVER_ERROR,
		description: 'An error occurred while updating the reservation',
	})
	updateReservation(
		@Param('id') reservationId: string,
		@Body() data: ReqUpdateReservationDto,
	): Promise<ResUpdatedReservationDto> {
		return this.bookingService.updateReservation(reservationId, data);
	}

	@Delete('delete-reservation/:id')
	@ApiParam({
		name: 'id',
		type: String,
		required: true,
		description: 'Identifier reservation for remove',
		example: faker.string.uuid(),
	})
	@ApiResponse({
		status: HttpStatus.NO_CONTENT,
		description: 'Reservation remove successfully',
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Identifier is not correct. Reservation is not found',
	})
	@ApiResponse({
		status: HttpStatus.INTERNAL_SERVER_ERROR,
		description: 'An error occurred while deleting the reservation',
	})
	deleteReservation(@Param('id') reservationId: string): Promise<void> {
		return this.bookingService.deleteReservation(reservationId);
	}
}
