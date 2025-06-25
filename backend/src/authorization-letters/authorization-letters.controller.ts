import { Controller, Get, Post, Body, Param, UseGuards, HttpCode } from '@nestjs/common';
import { AuthorizationService } from './authorization-letters.service';
import { CreateAuthorizationLettersDto } from './dto/create-authorization-letters.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@Controller('authorization-letters')
export class AuthorizationController {
  constructor(private readonly authService: AuthorizationService) {}

  @Post('')
  async saveAuthorizationLetters(
    @Body() createAuthorizationLettersDto: CreateAuthorizationLettersDto,
  ) {
    return await this.authService.saveAuthorizationLetters(createAuthorizationLettersDto);
  }

  @Get('')
  async getAllAuthorizationLetters() {
    return await this.authService.getAllAuthorizationLetters();
  }

  @Get('/:id')
  async getAuthorizationLetterById(@Param('id') id: string) {
    return await this.authService.getAuthorizationLetterById(Number(id));
  }

  @Post('/validate')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Dados válidos. (OK)' })
  @ApiBadRequestResponse({ description: 'Dados inválidos ou mal formatados. (Bad Request)' })
  async validate(@Body() data: CreateAuthorizationLettersDto) {
    await this.authService.validateAuthorizationLetterData(data);
    return { message: 'Dados válidos' };
  }
}