import { Controller, Post, Body, UseGuards, HttpCode } from '@nestjs/common';
import { ReportSubmissionsService } from './report-submissions.service';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiOkResponse, ApiUnauthorizedResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateAuthorizationLettersDto } from 'src/authorization-letters/dto/create-authorization-letters.dto';
import { GenerateReportsDto } from './dto/generate-reports.dto';
import { AuthorizationService } from 'src/authorization-letters/authorization-letters.service';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Report Submissions')
@Controller('report-submissions')
export class ReportSubmissionsController {
  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly reportSubmissionsService: ReportSubmissionsService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Enviar e-mail e dados para o Zapier' })
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
  async generateReportsAndSendEmail(@Body() dto: CreateAuthorizationLettersDto) {
    try {

      const saved = await this.authorizationService.saveAuthorizationLetters(dto);

      const reportDto: GenerateReportsDto = {
        id_request: saved.id_request,
        cnpj: saved.cnpj,
        responsible_person_name: saved.responsible_person_name,
        responsible_person_email: saved.responsible_person_email,
        id_products: saved.id_products,
      };

      await this.reportSubmissionsService.generateSendAndNotify(reportDto);

      return {
        message: 'E-mail enviado e dados enviados para o Zapier com sucesso!',
      };
    } catch (error) {
      throw error;
    }
  }
}