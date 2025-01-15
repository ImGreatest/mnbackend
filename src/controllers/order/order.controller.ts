import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import {
  Body,
  Controller,
  Delete,
  Get,
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

@ApiTags("order")
@ApiBearerAuth()
@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

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
