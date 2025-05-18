import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { VanTypesService } from './van-types.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { VanTypesDto } from './dto/select-van-types.dto';

@ApiTags('Van Types')
@Controller('van-types')
export class VanTypesController {
  constructor(private readonly vanTypesService: VanTypesService) {}

  @Get(':id')
  @ApiOkResponse({ type: [VanTypesDto] })

  findAllByBankId(@Param('id', ParseIntPipe) id: number) {
    return this.vanTypesService.findAllByBankId(id);
  }
}