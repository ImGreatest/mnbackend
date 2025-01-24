import { IProfile } from "../../../../shared/entity/profile.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class ReqCreateProfileDto
  implements Omit<IProfile, "createdAt" | "updatedAt">
{
  @ApiProperty({
    type: String,
    required: true,
    description: "Property of user identifier",
  })
  @IsString({ message: "User identifier value must be string" })
  userId: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Property of firstname user",
  })
  @IsOptional()
  @IsString({ message: "Firstname value must be type string" })
  firstname?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Property of middle name user",
  })
  @IsOptional()
  @IsString({ message: "Middle name value must be type string" })
  middleName?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Property of lastname user",
  })
  @IsOptional()
  @IsString({ message: "Lastname value must be type string" })
  lastname?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Property of address user",
  })
  @IsOptional()
  @IsString({ message: "Address value must be type string" })
  address?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: "Property for alternate contact user",
  })
  @IsOptional()
  @IsString({ message: "Alternative contact value must be type string" })
  alternateContact?: string;
}
