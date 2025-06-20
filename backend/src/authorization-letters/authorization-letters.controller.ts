import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthorizationService } from './authorization-letters.service';
import { CreateAuthorizationLettersDto } from './dto/create-authorization-letters.dto';
import { convertBigIntToString } from 'src/utils/bigint.helper';

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authService: AuthorizationService) {}

  @Post('authorization-letters')
  async saveAuthorizationLetters(
    @Body() createAuthorizationLettersDto: CreateAuthorizationLettersDto,
  ) {
    return await this.authService.saveAuthorizationLetters(createAuthorizationLettersDto);
  }

  @Get('authorization-letters')
  async getAllAuthorizationLetters() {
    return await this.authService.getAllAuthorizationLetters();
  }

  @Get('authorization-letters/:id')
  async getAuthorizationLetterById(@Param('id') id: string) {
    return await this.authService.getAuthorizationLetterById(Number(id));
  }
}
