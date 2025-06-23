import { Controller, Get, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { BanksService } from './banks.service';
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { BanksDto } from './dto/select-banks.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Banks')
@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Get()
  @ApiOkResponse({ type: [BanksDto] })
  findAll() {
    return this.banksService.findAllBanks();
  }

  @Get(':id')
  @ApiOkResponse({ type: BanksDto })
  findBankDetailsById(@Param('id', ParseIntPipe) id: number) {
    return this.banksService.findBankDetailsById(id);
  }
}