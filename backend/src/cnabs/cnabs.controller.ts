import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CnabsService } from './cnabs.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { CnabsDto } from './dto/select-cnabs.dto';

@ApiTags('Cnabs')
@Controller('cnabs')
export class CnabsController {
  constructor(private readonly cnabsService: CnabsService) {}

  @Get(':id')
  @ApiOkResponse({ type: [CnabsDto] })
  findAllByBankId(@Param('id', ParseIntPipe) id: number) {
    return this.cnabsService.findAllByBankId(id);
  }
}