import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class GenerateReportsDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id_request: string;

  @ApiProperty({ type: [ProductDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  id_products: ProductDto[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  responsible_person_name: string;

  @ApiProperty()
  @IsEmail()
  responsible_person_email: string;
}