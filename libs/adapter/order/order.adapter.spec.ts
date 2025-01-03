import { PrismaService } from "../../services/prisma/prisma.service";
import { PrismaModule } from "../../services/prisma/prisma.module";
import { Test } from "@nestjs/testing";
import { OrderAdapter } from "./order.adapter";
import { OrderModule } from "../../domain/order/order.module";
import { afterEach } from "node:test";
import { MockDataReqOrder } from "../../domain/order/mocks/const/mock-data-req-order.const";
import { EOrderStatus } from "@prisma/client";
import { UserModule } from "../../domain/user/user.module";
import { UserService } from "../../domain/user/user.service";
import { Decimal } from "@prisma/client/runtime/library";

describe('Order endpoint prepare to tests', () => {
	let prisma: PrismaService;
	let adapter: OrderAdapter;
	let userService: UserService;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [
				PrismaModule,
				OrderModule,
				UserModule,
			],
			providers: [OrderAdapter],
		}).compile();

		prisma = moduleRef.get(PrismaService);
		adapter = moduleRef.get(OrderAdapter);
		userService = moduleRef.get(UserService);
		await prisma.cleanDatabase();
	});

	describe('OrderAdapter', () => {
		afterEach(() => {
			console.log('✅ Test was complete'); // eslint-disable-line
		});

		it('should create new order', async () => {
			const res = await adapter.createOrder(MockDataReqOrder)

			expect(res).toBeDefined();
			expect(res).toHaveProperty('id');
		});

		it('should get order by identifier', async () => {
			const res = await adapter.getOrder(
				await adapter.createOrder(MockDataReqOrder)
					.then((newOrder) => newOrder.id),
			);

			expect(res).toBeDefined();
			expect(res).toHaveProperty('id');
			expect(typeof res.status).toBe('string');
		});

		it('should get just array of orders', async () => {
			// Get orders by status active
			await adapter.createOrder({ ...MockDataReqOrder, status: EOrderStatus.active })

			const ordersByStatus = await adapter.getOrders(EOrderStatus.active);

			expect(ordersByStatus).toBeDefined();
			expect(ordersByStatus.orders[0].status).toBe(EOrderStatus.active);

			// Gets all orders
			const orders = await adapter.getOrders();

			expect(orders).toBeDefined();
			expect(orders).toHaveProperty('orders');
			expect(orders.orders[0]).toHaveProperty('id');
		});

		it('should update order', async () => {
			const created = await adapter.createOrder(MockDataReqOrder);

			expect(created).toBeDefined();
			expect(created).toHaveProperty('id');

			const updated = await adapter.updateOrder(created.id, {
				...MockDataReqOrder,
				cost: new Decimal(10000),
			});

			expect(updated).toBeDefined();
			expect(updated.id).toBe(created.id);
			expect(updated.status).toBe(created.status);
			expect(updated.cost).not.toBe(created.cost);
		});

		it('should delete order', async () => {
			const created = await adapter.createOrder(MockDataReqOrder);

			expect(created).toBeDefined();
			expect(created).toHaveProperty('id');

			await adapter.deleteOrder(created.id);

			const deleted = await adapter.getOrder(created.id);

			expect(deleted).toBeNull();
		});

		afterEach(() => {
			console.log('✅ Favorite Adapter tests complete successfully'); // eslint-disable-line
		});
	});
});
