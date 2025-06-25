import { Controller, Get, UseGuards } from '@nestjs/common';
import { CnabsService } from './cnabs.service';
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CnabsDto } from './dto/select-cnabs.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Cnabs')
@Controller('cnabs')
export class CnabsController {
  constructor(private readonly cnabsService: CnabsService) {}

  @Get()
  @ApiOkResponse({ type: [CnabsDto] })
  findAllByBankId(){
    return this.cnabsService.findAllCnabs();
  }
}