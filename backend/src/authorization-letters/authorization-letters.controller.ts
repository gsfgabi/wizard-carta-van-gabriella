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
}
