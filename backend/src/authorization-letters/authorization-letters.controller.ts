import { Controller, Get, Post, Body, Param, UseGuards, HttpCode } from '@nestjs/common';
import { AuthorizationService } from './authorization-letters.service';
import { CreateAuthorizationLettersDto } from './dto/create-authorization-letters.dto';
import { AuthGuard } from '@nestjs/passport';
import { GenerateReportsDto } from 'src/report-submissions/dto/generate-reports.dto';
import { ApiBearerAuth, ApiOkResponse, ApiBadRequestResponse, ApiOperation, ApiUnauthorizedResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@Controller('authorization-letters')
export class AuthorizationController {
  constructor(private readonly authService: AuthorizationService) {}

  @Post()
  @ApiOperation({ summary: 'Salvar dados da Carta de Van no banco de dados' })
  @ApiOkResponse({
    description: '(OK)',
    type: GenerateReportsDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiBadRequestResponse({
    description: 'Requisição malformada. (Bad Request).',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })
  async saveAuthorizationLetters(
    @Body() createAuthorizationLettersDto: CreateAuthorizationLettersDto,
  ) {
    return await this.authService.saveAuthorizationLetters(createAuthorizationLettersDto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todas as Cartas de Van' })
  @ApiOkResponse({
    description: '(OK)',
    type: CreateAuthorizationLettersDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })
  async getAllAuthorizationLetters() {
    return await this.authService.getAllAuthorizationLetters();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Buscar Carta de Van por Id' })
  @ApiOkResponse({
    description: '(OK)',
    type: CreateAuthorizationLettersDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })
  async getAuthorizationLetterById(@Param('id') id: string) {
    return await this.authService.getAuthorizationLetterById(Number(id));
  }

  @Post('/validate')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Dados válidos. (OK)' })
  @ApiOperation({ summary: 'Validar dados da Carta de Van' })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiBadRequestResponse({
    description: 'Requisição malformada. (Bad Request).',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })
  async validate(@Body() data: CreateAuthorizationLettersDto) {
    await this.authService.validateAuthorizationLetterData(data);
    return { message: 'Dados válidos' };
  }
}