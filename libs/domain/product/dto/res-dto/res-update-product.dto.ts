import { OmitType } from "@nestjs/swagger";
import { ResProductDto } from "./res-product.dto";

export class ResUpdateProductDto extends OmitType(ResProductDto, ["id"] as const) {}
