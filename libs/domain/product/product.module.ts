import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductRepository } from "./repository/product.repository";
import { ProductAdapter } from "../../adapter/product/product.adapter";

@Module({
	providers: [
		ProductService,
		{
			provide: ProductRepository,
			useClass: ProductAdapter,
		}
	],
	exports: [ProductService],
})
export class ProductModule {}
