import { Injectable } from "@nestjs/common";
import { OrderRepository } from "./repositories/order.repository";
import { ReqCreateOrderDto } from "./dto/req-dto/req-create-order.dto";
import { ResOrderDto } from "./dto/res-dto/res-order.dto";
import { ResOrdersDto } from "./dto/res-dto/res-orders.dto";
import { ReqUpdateOrderDto } from "./dto/req-dto/req-update-order.dto";

@Injectable()
export class OrderService {
  constructor(private readonly orderRep: OrderRepository) {}

  async createOrder(data: ReqCreateOrderDto): Promise<ResOrderDto> {
    return this.orderRep.createOrder(data);
  }

  async getOrder(orderId: string, userId?: string): Promise<ResOrderDto> {
    return this.orderRep.getOrder(orderId, userId);
  }

  async getOrders(userId?: string, status?: string): Promise<ResOrdersDto> {
    return this.orderRep.getOrders(userId, status);
  }

  async updateOrder(
    orderId: string,
    data: ReqUpdateOrderDto,
  ): Promise<ResOrderDto> {
    return this.orderRep.updateOrder(orderId, data);
  }

  async deleteOrder(orderId: string): Promise<void> {
    return this.orderRep.deleteOrder(orderId);
  }
}
