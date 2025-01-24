import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
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
import { OrderService } from "../../../libs/domain/order/order.service";
import { ReqCreateOrderDto } from "../../../libs/domain/order/dto/req-dto/req-create-order.dto";
import { ResOrderDto } from "../../../libs/domain/order/dto/res-dto/res-order.dto";
import { ResOrdersDto } from "../../../libs/domain/order/dto/res-dto/res-orders.dto";
import { ReqUpdateOrderDto } from "../../../libs/domain/order/dto/req-dto/req-update-order.dto";
import { ResProductsOrderDto } from "../../../libs/domain/product-order/dto/res-products-order.dto";
import { ProductOrderService } from "../../../libs/domain/product-order/product-order.service";
import { faker } from "@faker-js/faker";
import { ResProfileDto } from "../../../libs/domain/profile/dto/res-dto/res-profile.dto";

@ApiTags("order")
@ApiBearerAuth()
@Controller("order")
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly productOrderService: ProductOrderService,
  ) {}

  @Post("create-order")
  createOrder(@Body() data: ReqCreateOrderDto): Promise<ResOrderDto> {
    return this.orderService.createOrder(data);
  }

  @Get("order/:id")
  getOrder(
    @Param("id") orderId: string,
    @Query("userId") userId?: string,
  ): Promise<ResOrderDto> {
    return this.orderService.getOrder(orderId, userId);
  }

  @Get("orders")
  getOrders(
    @Query("orderId") userId?: string,
    @Query("status") status?: string,
  ): Promise<ResOrdersDto> {
    return this.orderService.getOrders(userId, status);
  }

  @Get("products-order/:orderId")
  @ApiOperation({
    summary:
      "Method for getting separate data about products in order, without data order",
  })
  @ApiParam({
    name: "orderId",
    type: String,
    description: "Property order identifier",
    example: faker.string.uuid(),
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: ResProfileDto,
    description: "Return products in order",
    isArray: false,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Invalid input data",
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "Order is not found",
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description:
      "An error occurred while getting the products by identifier order",
  })
  getProductsOrder(
    @Param("orderId") orderId: string,
  ): Promise<ResProductsOrderDto> {
    return this.productOrderService.getProductsOrder(orderId);
  }

  @Put("update-order/:id")
  updateOrder(
    @Param("id") orderId: string,
    @Body() data: ReqUpdateOrderDto,
  ): Promise<ResOrderDto> {
    return this.orderService.updateOrder(orderId, data);
  }

  @Delete("delete-order/:id")
  deleteOrder(@Param("id") orderId: string): Promise<void> {
    return this.orderService.deleteOrder(orderId);
  }
}
