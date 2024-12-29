import { PrismaService } from "../../services/prisma/prisma.service";
import { CategoryAdapter } from "./category.adapter";
import { Test } from "@nestjs/testing";
import { CategoryModule } from "../../domain/category/category.module";
import { afterEach } from "node:test";
import { ResCategoryDto } from "../../domain/category/dto/res-dto/res-category.dto";
import { MockDataReqCategory } from "../../domain/category/mocks/const/mock-data-req-category.const";
import { checkCreated } from "../../../test/check-created";
import { ResCategoriesDto } from "../../domain/category/dto/res-dto/res-categories.dto";
import { PrismaModule } from "../../services/prisma/prisma.module";

describe('Category endpoint prepare to tests', () => {
	let prisma: PrismaService;
	let adapter: CategoryAdapter;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [PrismaModule, CategoryModule],
			providers: [CategoryAdapter],
		}).compile();

		prisma = moduleRef.get(PrismaService);
		adapter = moduleRef.get(CategoryAdapter);
		await prisma.cleanDatabase();
	});

	describe('CategoryAdapter', () => {
		afterEach(() => {
			console.log('✅ Test was complete'); // eslint-disable-line
		});

		it('should create category', async () => {
			const created: ResCategoryDto = await adapter.createCategory({
				name: 'Test name category',
			});
			const res: ResCategoryDto = await adapter.getCategory(created.id);

			expect(created).toBeDefined();
			expect(created).toHaveProperty('id');
			expect(typeof created.id).toBe('string');
			expect(res.id).toBe(created.id);
		});

		it('should get current category by identifier', async () => {
			const created: ResCategoryDto = await adapter.createCategory(MockDataReqCategory);

			await checkCreated(created);

			const res: ResCategoryDto = await adapter.getCategory(created.id);

			expect(res).toHaveProperty('id');
			expect(res).toHaveProperty('name');
			expect(typeof res.name).toBe('string');
			expect(res.id).toBe(created.id);
		});

		it('should get all categories', async () => {
			let res = await adapter.getCategories();

			if (!res.categories?.length) {
				await adapter.createCategory(MockDataReqCategory);
				res = await adapter.getCategories();
			}

			expect(res).toBeDefined();
			expect(res).toHaveProperty('categories');
			expect(res.categories[0]).toHaveProperty('id');
			expect(res.categories[0]).toHaveProperty('name');
			expect(typeof res.categories[0].name).toBe('string');
		});

		it('should update category', async () => {
			let categories: ResCategoriesDto = await adapter.getCategories();

			if (!categories.categories?.length) {
				await adapter.createCategory(MockDataReqCategory);
				categories = await adapter.getCategories();
			}

			const updated = await adapter.updateCategory(categories.categories[0].id!, {
				name: 'Updated category',
			});

			expect(categories).toBeDefined();
			expect(categories.categories[0]).toHaveProperty('name');
			expect(updated).toHaveProperty('name', 'Updated category');
			expect(categories.categories[0].name).not.toEqual(updated.name);
		});

		it('should deleted current category', async () => {
			let categories: ResCategoriesDto = await adapter.getCategories();

			if (!categories.categories?.length) {
				await adapter.createCategory(MockDataReqCategory);
				categories = await adapter.getCategories();
			}

			const lastCategory: ResCategoryDto = categories.categories[categories.categories.length - 1];
			await adapter.deleteCategory(lastCategory.id);

			const deletedCategory: ResCategoryDto = await adapter.getCategory(lastCategory.id);

			expect(deletedCategory).toBeNull();
		});

		afterEach(() => {
			console.log('✅ Favorite Adapter tests complete successfully'); // eslint-disable-line
		});
	});
});
