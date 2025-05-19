// src/auth/dto/create-authorization-letters-products.dto.ts
import { IsInt } from 'class-validator';

export class CreateAuthorizationLettersProductsDto {
  @IsInt()
  id_products: number;

  @IsInt()
  id_authorization_letters: number;
}
