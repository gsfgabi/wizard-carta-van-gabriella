import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { VanTypesService } from './van-types.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { VanTypesDto } from './dto/select-van-types.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Van Types')
@Controller('van-types')
export class VanTypesController {
  constructor(private readonly vanTypesService: VanTypesService) {}

  @Get()
  @ApiOkResponse({ type: [VanTypesDto] })

  findAllByBankId() {
    return this.vanTypesService.findAllVanTypes();
  }
}