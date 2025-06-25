import { IsNotEmpty, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsNotEmpty()
  @Matches(/^\d{14}$/, { message: 'CNPJ deve conter 14 números' })
  @ApiProperty()
  cnpj: string;

  @IsNotEmpty()
  @Length(6, 32)
  @ApiProperty()
  token: string;
}

export class LoginResponseDto {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  company_name: string;

  @ApiProperty()
  url_image: string;
}