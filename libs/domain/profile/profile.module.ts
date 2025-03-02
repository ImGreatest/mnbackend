import { Module } from "@nestjs/common";
import { ProfileProvider } from "./providers/profile.provider";
import { ProfileService } from "./profile.service";

@Module({
  providers: [...ProfileProvider],
  exports: [ProfileService],
})
export class ProfileModule {}
