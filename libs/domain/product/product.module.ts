import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductProvider } from "./providers/product.provider";

@Module({
	providers: [...ProductProvider],
	exports: [ProductService],
})
export class ProductModule {}
