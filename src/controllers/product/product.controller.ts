import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { faker } from "@faker-js/faker";
import { ProductService } from "../../../libs/domain/product/product.service";
import { ReqCreateProductDto } from "../../../libs/domain/product/dto/req-dto/req-create-product.dto";
import { ResProductDto } from "../../../libs/domain/product/dto/res-dto/res-product.dto";
import { ResProductsDto } from "../../../libs/domain/product/dto/res-dto/res-products.dto";
import { ResProductsByRangeCostDto } from "../../../libs/domain/product/dto/res-dto/res-products-by-range-cost.dto";
import { ResUpdateProductDto } from "../../../libs/domain/product/dto/res-dto/res-update-product.dto";
import { ReqUpdateProductDto } from "../../../libs/domain/product/dto/req-dto/req-update-product.dto";
import { ResProductsByNameDto } from "../../../libs/domain/product/dto/res-dto/res-products-by-name.dto";
import { MockReqCreateProductDto } from "../../../libs/domain/product/mocks/req-mocks/mock-req-create-product.dto";
import { MockResProductDto } from "../../../libs/domain/product/mocks/res-mocks/mock-res-product.dto";
import { MockResUpdateProductDto } from "../../../libs/domain/product/mocks/res-mocks/mock-res-update-product.dto";
import { MockResProductsDto } from "../../../libs/domain/product/mocks/res-mocks/mock-res-products.dto";
import { MockResProductsByNameDto } from "../../../libs/domain/product/mocks/res-mocks/mock-res-products-by-name.dto";
import {
	MockResProductsByRangeCostDto
} from "../../../libs/domain/product/mocks/res-mocks/mock-res-products-by-range-cost.dto";
import { MockReqUpdateProductDto } from "../../../libs/domain/product/mocks/req-mocks/mock-req-update-product.dto";

@ApiTags('product')
@ApiBearerAuth()
@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post('create-product')
	@ApiBody({
		type: ReqCreateProductDto,
		required: true,
		description: 'Data for create new product',
		examples: MockReqCreateProductDto,
	})
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'Successfully create product',
		type: null,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Fail create product'
	})
	createProduct(@Body() data: ReqCreateProductDto): Promise<void> {
		return this.productService.createProduct(data);
	}

	@Get('product/:id')
	@ApiParam({
		name: "id",
		type: String,
		required: true,
		description: 'Identifier product',
		example: faker.string.uuid(),
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Return specific product by identifier',
		type: ResProductDto,
		isArray: false,
		example: MockResProductDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'User is not found',
	})
	getProduct(@Param('id') productId: string): Promise<ResProductDto> {
		return this.productService.getProduct(productId);
	}

	@Get('products')
	@ApiQuery({
		name: 'name',
		type: String,
		required: false,
		description: 'Optional parameter for sampling data by name',
		example: faker.commerce.product(),
	})
	@ApiQuery({
		name: 'cost',
		type: String,
		required: false,
		description: 'Optional parameter for sampling data by cost',
		example: faker.number.int(),
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Returns all products',
		type: ResProductsDto,
		isArray: true,
		example: MockResProductsDto,
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Products is not found',
	})
	getProducts(
		@Query('name') name?: string,
		@Query('cost') cost?: number,
	): Promise<ResProductsDto> {
		return this.productService.getProducts(name, cost);
	}

	@Get('products-by-name/:name')
	@ApiParam({
		name: 'name',
		type: String,
		required: true,
		description: 'Namely product',
		example: faker.commerce.product(),
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Returns products by name',
		type: ResProductsByNameDto,
		isArray: true,
		example: MockResProductsByNameDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Products is not found',
	})
	getProductsByName(@Param('name') name: string): Promise<ResProductsByNameDto[]> {
		return this.productService.getProductsByName(name);
	}

	@Get('products-by-range-cost/:min')
	@ApiParam({
		name: 'min',
		type: String,
		required: true,
		description: 'Min value of cost a product',
		example: faker.number.int(),
	})
	@ApiQuery({
		name: 'max',
		type: String,
		required: true,
		description: 'Max value of cost a product',
		example: faker.number.int(),
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Returns product which cost is between min and max values',
		type: ResProductsByRangeCostDto,
		isArray: true,
		example: MockResProductsByRangeCostDto,
	})
	getProductsByRangeCost(
		@Param('min') minCost: number,
		@Query('max') maxCost: number,
	): Promise<ResProductsByRangeCostDto[]> {
		return this.productService.getProductsByRangeCost(minCost, maxCost);
	}

	@Post('update-product/:id')
	@ApiParam({
		name: 'id',
		required: true,
		type: String,
		description: 'Identifier product',
		example: faker.string.uuid(),
	})
	@ApiBody({
		type: ReqUpdateProductDto,
		required: true,
		description: 'Data with new vales product which will be update',
		examples: MockReqUpdateProductDto,
	})
	@ApiResponse({
		status: HttpStatus.OK,
		type: ResUpdateProductDto,
		description: 'Product updated successfully',
		isArray: false,
		example: MockResUpdateProductDto,
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Product is not found',
	})
	updateProduct(
		@Param('id') productId: string,
		@Body() data: ReqUpdateProductDto,
	): Promise<ResUpdateProductDto> {
		return this.productService.updateProduct(productId, data);
	}

	@Delete('delete-product/:id')
	@ApiParam({
		name: 'id',
		type: String,
		required: true,
		description: 'Identifier product for remove',
		example: faker.string.uuid(),
	})
	@ApiResponse({
		status: HttpStatus.NO_CONTENT,
		type: null,
		description: 'Product remove successfully',
	})
	@ApiResponse({
		status: HttpStatus.BAD_REQUEST,
		description: 'Invalid input data',
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Product is not found',
	})
	deleteProduct(@Param('id') productId: string): Promise<void> {
		return this.productService.deleteProduct(productId);
	}
}
