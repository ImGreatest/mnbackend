import { Module } from "@nestjs/common";
import { SizeService } from "./size.service";
import { SizeProvider } from "./providers/size.provider";

@Module({
  providers: [...SizeProvider],
  exports: [SizeService],
})
export class SizeModule {}
