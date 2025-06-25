import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsEmail,
  IsNumberString,
  Length,
  IsArray,
  IsInt,
} from 'class-validator';

export class CreateAuthorizationLettersDto {
  @Length(14, 18)
  @ApiProperty()
  cnpj: string;

  @ApiProperty()
  id_request: string;

  @IsNotEmpty()
  @ApiProperty()
  corporate_name: string;

  @IsNotEmpty()
  @ApiProperty()
  responsible_person_name: string;

  @IsNotEmpty()
  @ApiProperty()
  responsible_person_title: string;

  @ApiProperty()
  responsible_person_cellphone: string;

  @IsEmail()
  @ApiProperty()
  responsible_person_email: string;

  @IsNotEmpty()
  @ApiProperty()
  manager_name: string;

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
  branch_dv: string;

  @IsNumberString()
  @ApiProperty()
  account_number: string;

  @IsNumberString()
  @ApiProperty()
  account_dv: string;

  @IsNumberString()
  @ApiProperty()
  agreement_number: string;

  @ApiProperty()
  id_banks: string;

  @ApiProperty()
  id_cnabs: string;

  @IsArray()
  @IsInt({ each: true })
  @ApiProperty()
  id_products: number[];

  @IsArray()
  @IsInt({ each: true })
  @ApiProperty()
  id_van_types: number[];
}
