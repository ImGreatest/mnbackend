import { PrismaService } from "../../services/prisma/prisma.service";
import { PrismaModule } from "../../services/prisma/prisma.module";
import { Test } from "@nestjs/testing";
import { PromoAdapter } from "./promo.adapter";
import { afterEach } from "node:test";
import { ResPromoDto } from "../../domain/promo/dto/res-dto/res-promo.dto";
import { faker } from "@faker-js/faker";
import { EPromoType } from "@prisma/client";

describe('Promo endpoint prepare to tests', () => {
	let prisma: PrismaService;
	let adapter: PromoAdapter;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [PrismaModule],
			providers: [PromoAdapter],
		}).compile();

		prisma = moduleRef.get(PrismaService);
		adapter = moduleRef.get(PromoAdapter);
		await prisma.cleanDatabase();
	});

	describe('PromoAdapter', () => {
		afterEach(() => {
			console.log("✅ Test was complete"); // eslint-disable-line
		});

		it('should create and get promo', async () => {
			const promo: ResPromoDto = await adapter.createPromo({
				code: faker.string.alpha(10),
				startTimeActive: new Date(Date.now()),
				endTimeActive: new Date(Date.now() + 1),
				type: EPromoType[0],
				percentage: faker.number.int({ min: 1, max: 100 }),
			});

			const res = await adapter.getPromo(promo.id);

			expect(promo).toBeDefined();
			expect(promo.id).toHaveProperty('id');
			expect(res).toBeDefined();
			expect(typeof res.id).toBe('string');
		});
	});

	it('should update promo', async () => {
		const promo: ResPromoDto = await adapter.createPromo({
			code: faker.string.alpha(10),
			startTimeActive: new Date(Date.now()),
			endTimeActive: new Date(Date.now() + 1),
			type: EPromoType[0],
			percentage: faker.number.int({ min: 1, max: 100 }),
		});

		expect(promo).toBeDefined();
		expect(promo).toHaveProperty('id');
		expect(typeof promo.id).toHaveProperty('string');

		const updated: ResPromoDto = await adapter.updatePromo(
			promo.id,
			{
				code: faker.string.alpha(10),
				startTimeActive: promo.startTimeActive,
				endTimeActive: promo.endTimeActive,
				type: promo.type,
				percentage: promo.percentage,
			},
		);

		expect(updated).toBeDefined();
		expect(updated).toHaveProperty('code');
		expect(updated.startTimeActive).toBe(promo.startTimeActive);
		expect(updated.code).not.toBe(promo.code);
	});

	it('should delete promo', async () => {
		const promo: ResPromoDto = await adapter.createPromo({
			code: faker.string.alpha(10),
			startTimeActive: new Date(Date.now()),
			endTimeActive: new Date(Date.now() + 1),
			type: EPromoType[0],
			percentage: faker.number.int({ min: 1, max: 100 }),
		});

		expect(promo).toBeDefined();
		expect(promo).toHaveProperty('id');
		expect(typeof promo.id).toHaveProperty('string');

		await adapter.deletePromo(promo.id);

		const deletedPromo: ResPromoDto = await adapter.getPromo(promo.id) || null;

		expect(deletedPromo).toBeNull();
	});

	afterEach(() => {
    console.log("✅ Bucket Adapter tests complete successfully"); // eslint-disable-line
  });
});
