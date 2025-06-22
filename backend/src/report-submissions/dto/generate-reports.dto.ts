import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ProductsDto } from 'src/products/dto/select-products.dto';
import { VanTypesDto } from 'src/van-types/dto/select-van-types.dto';
import { CnabsDto } from 'src/cnabs/dto/select-cnabs.dto';

export class GenerateReportsDto {
  @ApiProperty({ type: [ProductsDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductsDto)
  id_products: ProductsDto[];

  @IsArray()
  @ApiProperty()
  id_van_types: number[];

  @ApiProperty()
  id_cnabs: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  bank_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  manager_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  corporate_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  responsible_person_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  branch_number: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  account_number: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  agreement_number: string;

  @ApiProperty()
  @IsEmail()
  responsible_person_email: string;

  @ApiProperty()
  @IsString()
  responsible_person_cellphone: string;

  @ApiProperty()
  @IsString()
  responsible_person_title: string;

  @ApiProperty()
  @IsEmail()
  manager_email: string;

  @ApiProperty()
  @IsString()
  manager_cellphone: string;
}