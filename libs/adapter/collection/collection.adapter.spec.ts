import { PrismaService } from "../../services/prisma/prisma.service";
import { Test } from "@nestjs/testing";
import { CollectionAdapter } from "./collection.adapter";
import { CollectionModule } from "../../domain/collection/collection.module";
import { PrismaModule } from "../../services/prisma/prisma.module";
import { ResCollectionDto } from "../../domain/collection/dto/res-dto/res-collection.dto";
import { afterEach } from "node:test";
import { ResCollectionsDto } from "../../domain/collection/dto/res-dto/res-collections.dto";
import { MockDataReqCollection } from "../../domain/collection/mocks/const/mock-data-req-collection.const";

describe('Collection endpoint prepare to tests', () => {
	let prisma: PrismaService;
	let adapter: CollectionAdapter;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [PrismaModule, CollectionModule],
			providers: [CollectionAdapter],
		}).compile();

		prisma = moduleRef.get(PrismaService);
		adapter = moduleRef.get(CollectionAdapter);
		await prisma.cleanDatabase();
	});

	describe('CollectionAdapter', () => {
		afterEach(() => {
			console.log('✅ Test was complete'); // eslint-disable-line
		});

		it('should create and get collection', async () => {
			const collection: ResCollectionDto = await adapter.createCollection({
				name: 'Test collection',
			});

			expect(collection).toHaveProperty('id');
			expect(collection.id).toBeDefined();
			expect(typeof collection.id).toBe('string');
		});

		it('should get collection by identifier', async () => {
			const created: ResCollectionDto = await adapter.createCollection(MockDataReqCollection);

			expect(created).toHaveProperty('id');
			expect(created.id).toBeDefined();
			expect(typeof created.id).toBe('string');

			const res: ResCollectionDto = await adapter.getCollection(created.id);

			expect(res).toHaveProperty('id');
			expect(res.id).toBe(created.id);
		})
	});

	it('should get all collections', async () => {
		let res: ResCollectionsDto = await adapter.getCollections();

		if (res.collections.length === 0) {
			await adapter.createCollection(MockDataReqCollection);
			res = await adapter.getCollections();
		}

		expect(res).toBeDefined();
		expect(res).toHaveProperty('collections');
		expect(res.collections[0]).toHaveProperty('id');
		expect(res.collections[0]).toHaveProperty('name');
		expect(typeof res.collections[0].id).toBe( 'string');
	});

	it('should update collection', async () => {
		const collections: ResCollectionsDto = await adapter.getCollections();
		const updated: ResCollectionDto = await adapter.updateCollection(collections.collections[0].id, {
			name: 'Updated name collection',
		});

		expect(collections).toBeDefined();
		expect(collections.collections[0]).toHaveProperty('name');
		expect(updated).toHaveProperty('name', 'Updated name collection');
		expect(collections.collections[0].name).not.toEqual(updated.name);
	});

	it('should deleted current collection', async () => {
		let collections: ResCollectionsDto = await adapter.getCollections();

		if (collections.collections.length === 0) {
			await adapter.createCollection(MockDataReqCollection);
			collections = await adapter.getCollections();
		}

		const lastCollection: ResCollectionDto = collections.collections[collections.collections.length - 1];
		await adapter.deleteCollection(lastCollection.id!);

		const deletedCollection: ResCollectionDto = await adapter.getCollection(lastCollection.id);

		expect(deletedCollection).toBeNull();
	});

	afterAll(() => {
		console.log('✅ Collection Adapter tests complete successfully'); // eslint-disable-line
	});
});
