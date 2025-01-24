import { PrismaService } from "../../services/prisma/prisma.service";
import { SizeAdapter } from "./size.adapter";
import { Test } from "@nestjs/testing";
import { SizeModule } from "../../domain/size/size.module";
import { afterEach } from "node:test";
import { ResSizeDto } from "../../domain/size/dto/res-dto/res-size.dto";
import { ESize } from "../../domain/size/enum/size.enum";
import { faker } from "@faker-js/faker";
import { ResSizesDto } from "../../domain/size/dto/res-dto/res-sizes.dto";
import { PrismaModule } from "../../services/prisma/prisma.module";

describe("Size endpoint prepare to tests", () => {
  let prisma: PrismaService;
  let adapter: SizeAdapter;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PrismaModule, SizeModule],
      providers: [SizeAdapter],
    }).compile();

    prisma = moduleRef.get(PrismaService);
    adapter = moduleRef.get(SizeAdapter);
    await prisma.cleanDatabase();
  });

  describe("SizeAdapter", () => {
    afterEach(() => {
      console.log("✅ Test was complete"); // eslint-disable-line
    });

    it("should get size by name", async () => {
      const res: ResSizeDto | ResSizesDto = await adapter.getSize(
        ESize[
          faker.number.int({
            min: 0,
            max: Object.keys(ESize).length,
          })
        ],
      );

      if (res instanceof ResSizeDto) {
        expect(res).toHaveProperty("name");
        expect(typeof res.name).toBe("string");
      }

      if (res instanceof ResSizesDto) {
        expect(res).toHaveProperty("sizes");
        expect(typeof res.sizes[0].name).toBe("string");
      }
      expect(res).toBeDefined();
    });
  });
});
