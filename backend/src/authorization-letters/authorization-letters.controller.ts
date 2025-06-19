import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorizationLettersService } from './authorization-letters.service';
import { CreateAuthorizationLettersDto } from './dto/create-authorization-letters.dto';
import { CreateAuthorizationLettersProductsDto } from './dto/create-authorization-letters-products.dto';
import { CreateAuthorizationLettersVanTypesDto } from './dto/create-authorization-letters-van-types.dto';

@Controller('forms')
export class AuthorizationLettersController {
  constructor(private readonly authService: AuthorizationLettersService) {}

  @Post('form-authorization-letters')
  async saveAuthorizationLetters(
    @Body() createFormAuthorizationLettersDto: CreateAuthorizationLettersDto
  ) {
    return await this.authService.saveAuthorizationLetters(createFormAuthorizationLettersDto);
  }

  @Get('form-authorization-letters')
  async getAllAuthorizationLetters() {
    return await this.authService.getAllAuthorizationLetters();
  }

  @Get('form-authorization-letters/:id')
  async getAuthorizationLetterById(@Param('id') id: string) {
    return await this.authService.getAuthorizationLetterById(Number(id));
  }

  @Post('form-authorization-letters-products')
  async saveAuthorizationLettersProducts(
    @Body() createFormAuthorizationLettersProductsDto: CreateAuthorizationLettersProductsDto
  ) {
    return await this.authService.saveAuthorizationLettersProducts(createFormAuthorizationLettersProductsDto);
  }

  @Post('form-authorization-letters-van-types')
  async saveAuthorizationLettersVanTypes(
    @Body() createFormAuthorizationLettersVanTypesDto: CreateAuthorizationLettersVanTypesDto
  ) {
    return await this.authService.saveAuthorizationLettersVanTypes(createFormAuthorizationLettersVanTypesDto);  }
}