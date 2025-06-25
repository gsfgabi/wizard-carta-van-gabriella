import { Controller, Get, UseGuards, HttpCode } from '@nestjs/common';
import { CnabsService } from './cnabs.service';
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiOperation, ApiInternalServerErrorResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { CnabsDto } from './dto/select-cnabs.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Cnabs')
@Controller('cnabs')
export class CnabsController {
  constructor(private readonly cnabsService: CnabsService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Buscar todos as CNABs' })
  @ApiOkResponse({
    description: '(OK)',
    type: CnabsDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })

  findAllByBankId(){
    return this.cnabsService.findAllCnabs();
  }
}