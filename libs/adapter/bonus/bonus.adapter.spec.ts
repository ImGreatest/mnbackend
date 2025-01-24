import { PrismaService } from "../../services/prisma/prisma.service";
import { BonusAdapter } from "./bonus.adapter";
import { Test } from "@nestjs/testing";
import { afterEach } from "node:test";
import { UserService } from "../../domain/user/user.service";
import { PrismaModule } from "../../services/prisma/prisma.module";
import { UserModule } from "../../domain/user/user.module";
import { MockDataReqUser } from "../../domain/user/mocks/const/mock-data-req-user";
import { ResBonusDto } from "../../domain/bonus/dto/res-bonus.dto";

describe("Bonus endpoint prepare to tests", () => {
  let prisma: PrismaService;
  let adapter: BonusAdapter;
  let userService: UserService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PrismaModule, UserModule],
      providers: [BonusAdapter],
    }).compile();

    prisma = moduleRef.get(PrismaService);
    adapter = moduleRef.get(BonusAdapter);
    userService = moduleRef.get(UserService);
    await prisma.cleanDatabase();
  });

  describe("should create new bonus account and getting data about bonus account", async () => {
    const created: ResBonusDto = await adapter.createBonusAccount({
      userId: await userService
        .createUser(MockDataReqUser)
        .then(async (newUser) => {
          return await userService
            .getUserByLogin(newUser.login)
            .then((res) => res.id);
        }),
      percentage: 1,
      bonusValue: 100,
    });

    const res: ResBonusDto = await adapter.getBonusAccount(created.userId);

    expect(created).toBeDefined();
    expect(created).toHaveProperty("userId");
    expect(res).toHaveProperty("userId");
    expect(typeof res.userId).toBe("string");
  });

  describe("should provide pop up action on bonus account", async () => {
    const created: ResBonusDto = await createBonusAccount();

    expect(created).toBeDefined();
    expect(created.bonusValue).toBe(100);

    const resAfterPopUp: ResBonusDto = await adapter.popUpBonusAccount(
      created.userId,
      100,
    );

    expect(resAfterPopUp).toBeDefined();
    expect(created.bonusValue).toBe(200);
  });

  describe("should provide write off some value from bonus account", async () => {
    const created: ResBonusDto = await createBonusAccount();

    expect(created).toBeDefined();
    expect(created.bonusValue).toBe(100);

    const resAfterWriteOff: ResBonusDto = await adapter.writeOffBonusAccount(
      created.userId,
      50,
    );

    expect(resAfterWriteOff).toBeDefined();
    expect(created.bonusValue).toBe(50);
  });

  describe("should update some data in bonus account", async () => {
    const created: ResBonusDto = await createBonusAccount();

    expect(created).toBeDefined();
    expect(created.bonusValue).toBe(100);

    const updated: ResBonusDto = await adapter.updateBonusAccount(
      created.userId,
      {
        bonusValue: 99,
      },
    );

    expect(updated).toBeDefined();
    expect(created.bonusValue).toBe(99);
  });

  async function createBonusAccount(): Promise<ResBonusDto> {
    return await adapter.createBonusAccount({
      userId: await userService
        .createUser(MockDataReqUser)
        .then(async (newUser) => {
          return await userService
            .getUserByLogin(newUser.login)
            .then((res) => res.id);
        }),
      percentage: 1,
      bonusValue: 100,
    });
  }

  afterEach(() => {
    console.log("✅ Bonus Adapter tests complete successfully"); // eslint-disable-line
  });
});
