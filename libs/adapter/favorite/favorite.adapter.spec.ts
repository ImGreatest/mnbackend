import { PrismaService } from "../../services/prisma/prisma.service";
import { FavoriteAdapter } from "./favorite.adapter";
import { Test } from "@nestjs/testing";
import { PrismaModule } from "../../services/prisma/prisma.module";
import { FavoriteModule } from "../../domain/favorite/favorite.module";
import { afterEach } from "node:test";
import { checkCreated } from "../../../test/check-created";
import { MockReqFavoriteRelation } from "../../domain/favorite/const/mock-req-favorite-relation.const";
import { ResRelationDto } from "../../domain/favorite/dto/res-dto/res-relation.dto";
import { UserModule } from "../../domain/user/user.module";
import { ProductModule } from "../../domain/product/product.module";
import { UserService } from "../../domain/user/user.service";
import { ProductService } from "../../domain/product/product.service";
import { MockDataReqUser } from "../../domain/user/mocks/const/mock-data-req-user";
import { ResUsersDto } from "../../domain/user/dto/res-dto/res-users.dto";
import { ResProductsDto } from "../../domain/product/dto/res-dto/res-products.dto";
import { MockDataReqProduct } from "../../domain/product/mocks/const/mock-data-req-product";
import { CollectionService } from "../../domain/collection/collection.service";
import { CollectionModule } from "../../domain/collection/collection.module";
import { ResCollectionsDto } from "../../domain/collection/dto/res-dto/res-collections.dto";
import { ResCollectionDto } from "../../domain/collection/dto/res-dto/res-collection.dto";
import { ResRelationsDto } from "../../domain/favorite/dto/res-dto/res-relations.dto";
import { ResUserDto } from "../../domain/user/dto/res-dto/res-user.dto";

describe('FavoriteAdapter', () => {
	let prisma: PrismaService;
	let adapter: FavoriteAdapter;
	let userService: UserService;
	let productService: ProductService;
	let collectionService: CollectionService;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [PrismaModule, UserModule, ProductModule, FavoriteModule, CollectionModule],
			providers: [FavoriteAdapter],
		}).compile();

		prisma = moduleRef.get(PrismaService);
		userService = moduleRef.get(UserService);
		productService = moduleRef.get(ProductService);
		collectionService = moduleRef.get(CollectionService);
		adapter = moduleRef.get(FavoriteAdapter);
		await prisma.cleanDatabase();
	});

	describe('Favorite Adapter', () => {
		afterEach(() => {
			console.log('✅ Test was complete'); // eslint-disable-line
		});

		it('should create favorite-relation', async () => {
			await checkCreated(await setupUserProductRelations());
		});

		it('should get current relation by identifier', async () => {
			const created: ResRelationDto = await adapter.createRelation(MockReqFavoriteRelation);
			const res: ResRelationDto = await adapter.getRelation(created.id);

			expect(created).toBeDefined();
			Object.keys(res).forEach((property, idx) => {
				if (typeof property === 'string') {
					expect(typeof res[idx]).toBe('string');
				} else {
					expect(typeof res[idx].toBe('Date'));
				}
				expect(res).toHaveProperty(property);
			});
			expect(created.id).toHaveProperty('id');
			expect(typeof created.id).toBe('string');
			expect(res.id).toBe(created.id);
		});

		it('should get all relations', async () => {
			const res: ResRelationsDto = await adapter.getRelations();

			if (!res.relations?.length) {
				res.relations.push(await setupUserProductRelations());
			}

			expect(res).toBeDefined();
			expect(res).toHaveProperty('relations');
			expect(res.relations[0]).toHaveProperty('id');
			expect(typeof res.relations[0]).toBe('string');
			expect(res.relations[0]).toHaveProperty('userId');
			expect(typeof res.relations[0].productId).toBe('string');
		});

		it('should update relation', async () => {
			const relations: ResRelationsDto = await adapter.getRelations();

			if (!relations.relations?.length) {
				relations.relations.push(await setupUserProductRelations());
			}

			// Update test using replace value identifier of user relation
			const createdUser: ResUserDto = await userService.createUser(MockDataReqUser);
			const updated: ResRelationDto = await adapter.updateRelation(relations.relations[0].id!, {
				userId: createdUser.id,
				productId: relations.relations[0].productId!,
			});

			expect(updated).toBeDefined();
			expect(updated).toHaveProperty('id');
			expect(typeof updated.id).toHaveProperty('string');
			expect(updated.userId).toBe(createdUser.id);
			expect(updated.productId).toBe(relations.relations[0].productId!);
			expect(typeof updated.userId).toBe('string');
		});

		it('should delete relation', async () => {
			const relations: ResRelationsDto = await adapter.getRelations();

			if (!relations.relations?.length) {
				relations.relations.push(await setupUserProductRelations());
			}

			await adapter.deleteRelation(relations.relations[relations.relations.length - 1].id!);

			const deletedRelation: ResRelationDto = await adapter.getRelation(relations.relations[relations.relations.length - 1].id!);

			expect(deletedRelation).toBeNull();
		});
	});

	async function setupUserProductRelations(): Promise<ResRelationDto> {
		const users: ResUsersDto = await userService.getUsers();

		if (!users.users?.length) {
			const createdUser = await userService.createUser(MockDataReqUser);

			users.users.push(createdUser);
		}

		const products: ResProductsDto = await productService.getProducts();

		if (!products.products?.length) {
			const collections: ResCollectionsDto = await collectionService.getCollections();

			if (!collections.collections?.length) {
				const createdCollection: ResCollectionDto = await collectionService.createCollection({ name: 'Test collection' });

				collections.collections.push(createdCollection);
			}

			const createdProduct = await productService.createProduct({
				...MockDataReqProduct,
				collectionId: collections.collections[collections.collections.length - 1].id!,
			});

			products.products.push(createdProduct);
		}

		return await adapter.createRelation({
			userId: users.users[users.users.length - 1].id!,
			productId: products.products[products.products.length - 1].id!,
		});
	}

	afterEach(() => {
		console.log('✅ Favorite Adapter tests complete successfully'); // eslint-disable-line
	});
});
