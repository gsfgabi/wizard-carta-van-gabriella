import { IsString, IsNotEmpty } from 'class-validator';

export class ZapierSendDataDto {
  @IsString()
  @IsNotEmpty()
  cnpj_sh: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  arquivo: string;

  @IsString()
  @IsNotEmpty()
  cnpj_cliente: string;

  @IsString()
  @IsNotEmpty()
  produto: string;
}
