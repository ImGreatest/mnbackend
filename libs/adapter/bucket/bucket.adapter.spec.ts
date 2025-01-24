import { PrismaService } from "../../services/prisma/prisma.service";
import { BucketAdapter } from "./bucket.adapter";
import { Test } from "@nestjs/testing";
import { PrismaModule } from "../../services/prisma/prisma.module";
import { BucketModule } from "../../domain/bucket/bucket.module";
import { afterEach } from "node:test";
import { UserService } from "../../domain/user/user.service";
import { ResBucketDto } from "../../domain/bucket/dto/res-dto/res-bucket.dto";
import { MockDataReqUser } from "../../domain/user/mocks/const/mock-data-req-user";
import { ProductService } from "../../domain/product/product.service";
import { MockDataReqProduct } from "../../domain/product/mocks/const/mock-data-req-product";
import { UserModule } from "../../domain/user/user.module";
import { ProductModule } from "../../domain/product/product.module";
import { CollectionService } from "../../domain/collection/collection.service";
import { CollectionModule } from "../../domain/collection/collection.module";
import { MockDataReqCollection } from "../../domain/collection/mocks/const/mock-data-req-collection.const";
import { ResBucketsDto } from "../../domain/bucket/dto/res-dto/res-buckets.dto";

describe("Bucket endpoint prepare to tests", () => {
  let prisma: PrismaService;
  let adapter: BucketAdapter;
  let userService: UserService;
  let productService: ProductService;
  let collectionService: CollectionService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        PrismaModule,
        BucketModule,
        UserModule,
        ProductModule,
        CollectionModule,
      ],
      providers: [BucketAdapter],
    }).compile();

    prisma = moduleRef.get(PrismaService);
    adapter = moduleRef.get(BucketAdapter);
    userService = moduleRef.get(UserService);
    productService = moduleRef.get(ProductService);
    collectionService = moduleRef.get(CollectionService);
    await prisma.cleanDatabase();
  });

  describe("BucketAdapter", () => {
    afterEach(() => {
      console.log("✅ Test was complete"); // eslint-disable-line
    });

    it("should create new bucket", async () => {
      const created: ResBucketDto = await adapter.createBucket({
        userId: await userService
          .createUser(MockDataReqUser)
          .then(async (newUser) => {
            return await userService
              .getUserByLogin(newUser.login)
              .then((res) => res.id);
          }),

        productId: await productService
          .createProduct({
            ...MockDataReqProduct,
            collectionId: await collectionService
              .createCollection(MockDataReqCollection)
              .then((newCollection) => newCollection.id),
          })
          .then((newProduct) => newProduct.id),
      });

      const res = await adapter.getBuckets(created.userId);

      expect(created).toBeDefined();
      expect(res.buckets[0]).toHaveProperty("id");
      expect(typeof res.buckets[0].id).toBe("string");
      expect(created).toHaveProperty("id");
      expect(typeof created.id).toBe("string");
      expect(res.buckets[0].id).toBe(created.id);
    });
  });

  it("should get bucket by user and product identifier", async () => {
    // Test on a getting bucket, only by identifier user
    const resOnlyUserData: ResBucketsDto = await adapter.getBuckets(
      await userService.createUser(MockDataReqUser).then(async (newUser) => {
        return await userService
          .getUserByLogin(newUser.login)
          .then((res) => res.id);
      }),
      null,
    );

    gettingBucketTestExpects(resOnlyUserData);

    // Test on a getting bucket, only by identifier product
    const resOnlyProductData = await adapter.getBuckets(
      null,
      await productService
        .createProduct(MockDataReqProduct)
        .then((newProduct) => newProduct.id),
    );

    gettingBucketTestExpects(resOnlyProductData);

    // Test on getting bucket with use user and product ids
    const resTwiceData: ResBucketsDto = await adapter.getBuckets(
      await userService.createUser(MockDataReqUser).then(async (newUser) => {
        return await userService
          .getUserByLogin(newUser.login)
          .then((res) => res.id);
      }),
      await productService
        .createProduct(MockDataReqProduct)
        .then((newProduct) => newProduct.id),
    );

    gettingBucketTestExpects(resTwiceData);

    function gettingBucketTestExpects(data: ResBucketsDto): void {
      expect(data).toBeDefined();
      expect(data).toHaveProperty("buckets");
      expect(data.buckets[0]).toHaveProperty("id");
      expect(data.buckets[0]).toHaveProperty("userId");
      expect(data.buckets[0]).toHaveProperty("productId");
    }
  });

  it("should update bucket", async () => {
    const created: ResBucketDto = await adapter.createBucket({
      userId: await userService
        .createUser(MockDataReqUser)
        .then(async (newUser) => {
          return await userService
            .getUserByLogin(newUser.login)
            .then((res) => res.id);
        }),
      productId: await productService
        .createProduct(MockDataReqProduct)
        .then((newProduct) => newProduct.id),
    });

    expect(created).toBeDefined();
    expect(created).toHaveProperty("id");
    expect(typeof created.id).toHaveProperty("userId");

    const updated = await adapter.updateBucket(created.id, {
      userId: created.userId,
      productId: await productService
        .createProduct(MockDataReqProduct)
        .then((newProduct) => newProduct.id),
    });

    expect(updated).toBeDefined();
    expect(updated).toHaveProperty("productId");
    expect(updated.userId).toBe(created.userId);
    expect(updated.productId).not.toBe(created.productId);
  });

  it("should clear bucket", async () => {
    // TODO write test for clear bucket
  });

  afterEach(() => {
    console.log("✅ Bucket Adapter tests complete successfully"); // eslint-disable-line
  });
});
