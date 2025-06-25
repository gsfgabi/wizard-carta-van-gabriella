import { Controller, Get, UseGuards, HttpCode } from '@nestjs/common';
import { VanTypesService } from './van-types.service';
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiOperation, ApiUnauthorizedResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { VanTypesDto } from './dto/select-van-types.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Van Types')
@Controller('van-types')
export class VanTypesController {
  constructor(private readonly vanTypesService: VanTypesService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Buscar todos os tipos de VAN BANCÁRIA' })
  @ApiOkResponse({
    description: '(OK)',
    type: VanTypesDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })


  findAllByBankId() {
    return this.vanTypesService.findAllVanTypes();
  }
}