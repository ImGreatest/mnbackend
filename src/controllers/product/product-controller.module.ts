import { Module } from "@nestjs/common";
import { ProductModule } from "../../../libs/domain/product/product.module";
import { ProductController } from "./product.controller";

@Module({
	providers: [ProductModule],
	controllers: [ProductController],
})
export class ProductControllerModule {}
