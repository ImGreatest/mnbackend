import { Provider } from "@nestjs/common";
import { ProductService } from "../product.service";
import { ProductAdapter } from "../../../adapter/product/product.adapter";
import { ProductRepository } from "../repositories/product.repository";

export const ProductProvider: Provider[] = [
	ProductService,
	{
		provide: ProductRepository,
		useClass: ProductAdapter,
	}
];