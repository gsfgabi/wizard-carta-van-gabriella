import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsEmail,
  IsNumberString,
  Length,
  IsArray,
  IsInt,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ProductDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class GeneratePdfsDto {
  @ApiProperty()
  id: string;

  @IsNumberString()
  @Length(14, 14)
  @ApiProperty()
  cnpj: string;

  @IsNotEmpty()
  @ApiProperty()
  corporate_name: string;

  @ApiProperty()
  url_logo: string;

  @ApiProperty()
  bank_city: string;

  @ApiProperty()
  bank_state: string;

  @IsNotEmpty()
  @ApiProperty()
  responsible_person_name: string;

  @IsNumberString()
  @ApiProperty()
  responsible_person_cellphone: string;

  @IsEmail()
  @ApiProperty()
  responsible_person_email: string;

  @IsNotEmpty()
  @ApiProperty()
  manager_name: string;

  @IsNumberString()
  @ApiProperty()
  manager_cellphone: string;

  @IsEmail()
  @ApiProperty()
  manager_email: string;

  @IsNumberString()
  @ApiProperty()
  branch_number: string;

  @IsNumberString()
  @ApiProperty()
  account_number: string;

  @IsNumberString()
  @ApiProperty()
  agreement_number: string;

  @IsNumberString()
  @ApiProperty()
  id_cnabs: string;

  @ApiProperty()
  type_cnabs: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  // @ApiProperty({ type: [ProductDto] })
  id_products: number[];

  @ApiProperty()
  name_product: string[];

  @IsArray()
  @IsInt({ each: true })
  @ApiProperty()
  id_van_types: number[];

  @ApiProperty()
  contact_preference: string;

  @ApiProperty()
  name_responsible_person_tecnospeed: string;

  @ApiProperty()
  email_responsible_person_tecnospeed: string;

  @ApiProperty()
  name_bank: string;

  @ApiProperty()
  id_bank: number;
}