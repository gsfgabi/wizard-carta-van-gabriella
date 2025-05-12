import { Controller, Get} from '@nestjs/common';
import { BanksService } from './banks.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { BanksDto } from './dto/select-bank.dto';

@ApiTags('banks')
@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Get()
  @ApiOkResponse({ type: [BanksDto] })
  findAll() {
    return this.banksService.findAll();
  }
}
