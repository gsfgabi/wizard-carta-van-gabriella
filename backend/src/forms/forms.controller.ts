import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormAuthorizationLettersDto } from './dto/create-form-authorization-letters.dto';
import { convertBigIntToString } from 'src/utils/bigint.helper';

@Controller('forms')
export class FormsController {
  constructor(private readonly authService: FormsService) {}

  @Post('form-authorization-letters')
  async saveAuthorizationLetters(
    @Body() createFormAuthorizationLettersDto: CreateFormAuthorizationLettersDto,
  ) {
    const result = await this.authService.saveAuthorizationLetters(createFormAuthorizationLettersDto);
    return convertBigIntToString(result);
  }

  @Get('form-authorization-letters')
  async getAllAuthorizationLetters() {
    const result = await this.authService.getAllAuthorizationLetters();
    return result.map(convertBigIntToString);
  }

  @Get('form-authorization-letters/:id')
  async getAuthorizationLetterById(@Param('id') id: string) {
    const result = await this.authService.getAuthorizationLetterById(Number(id));
    return convertBigIntToString(result);
  }
}
