import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ProductsDto } from 'src/products/dto/select-products.dto';

export class GenerateReportsDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id_request: string;

  @ApiProperty({ type: [ProductsDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductsDto)
  id_products: ProductsDto[];

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

  @ApiProperty()
  @IsString()
  responsible_person_title: string;
}