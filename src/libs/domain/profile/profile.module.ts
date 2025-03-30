import { Module } from "@nestjs/common";
import { PrismaModule } from "../../../services/prisma/prisma.module";
import { ProfileProvider } from "./providers/profile.provider";
import { ProfileService } from "./profile.service";

@Module({
	imports: [PrismaModule],
	providers: [...ProfileProvider],
	exports: [ProfileService],
})
export class ProfileModule {}
