import { IsNotEmpty, Length, Matches } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @Matches(/^\d{14}$/, { message: 'CNPJ deve conter 14 números' })
  cnpj: string;

  @IsNotEmpty()
  @Length(6, 32)
  token: string;
}
