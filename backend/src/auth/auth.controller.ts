import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthorizationLettersDto } from './dto/create-authorization-letters.dto';
import { CreateAuthorizationLettersProductsDto } from './dto/create-authorization-letters-products.dto';
import { CreateAuthorizationLettersVanTypesDto } from './dto/create-authorization-letters-van-types.dto';
import { convertBigIntToString } from 'src/utils/bigint.helper';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('authorization-letters')
  async saveAuthorizationLetters(
    @Body() createAuthorizationLettersDto: CreateAuthorizationLettersDto
  ) {
    const result = await this.authService.saveAuthorizationLetters(createAuthorizationLettersDto);
    return convertBigIntToString(result);
  }

  @Get('authorization-letters')
  async getAllAuthorizationLetters() {
    const result = await this.authService.getAllAuthorizationLetters();
    return result.map(convertBigIntToString);
  }

  @Get('authorization-letters/:id')
  async getAuthorizationLetterById(@Param('id') id: string) {
    const result = await this.authService.getAuthorizationLetterById(Number(id));
    return convertBigIntToString(result);
  }

  @Post('authorization-letters-products')
  async saveAuthorizationLettersProducts(
    @Body() createAuthorizationLettersProductsDto: CreateAuthorizationLettersProductsDto
  ) {
    const result = await this.authService.saveAuthorizationLettersProducts(createAuthorizationLettersProductsDto);
    return convertBigIntToString(result);
  }

  @Post('authorization-letters-van-types')
  async saveAuthorizationLettersVanTypes(
    @Body() createAuthorizationLettersVanTypesDto: CreateAuthorizationLettersVanTypesDto
  ) {
    const result = await this.authService.saveAuthorizationLettersVanTypes(createAuthorizationLettersVanTypesDto);
    return convertBigIntToString(result);
  }
}
