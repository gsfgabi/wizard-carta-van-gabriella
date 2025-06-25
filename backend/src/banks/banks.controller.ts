import { Controller, Get, Param, ParseIntPipe, UseGuards, HttpCode } from '@nestjs/common';
import { BanksService } from './banks.service';
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiOperation, ApiUnauthorizedResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { BanksDto } from './dto/select-banks.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Banks')
@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Buscar todos os bancos' })
  @ApiOkResponse({
    description: '(OK)',
    type: BanksDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })

  findAll() {
    return this.banksService.findAllBanks();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Buscar um banco pelo id' })
  @ApiOkResponse({
    description: '(OK)',
    type: BanksDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })
  findBankDetailsById(@Param('id', ParseIntPipe) id: number) {
    return this.banksService.findBankDetailsById(id);
  }
}