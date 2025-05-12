import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CnabsService } from './cnabs.service';
import { CreateCnabDto } from './dto/create-cnab.dto';
import { UpdateCnabDto } from './dto/update-cnab.dto';

@Controller('cnabs')
export class CnabsController {
  constructor(private readonly cnabsService: CnabsService) {}

  @Post()
  create(@Body() createCnabDto: CreateCnabDto) {
    return this.cnabsService.create(createCnabDto);
  }

  @Get()
  findAll() {
    return this.cnabsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cnabsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCnabDto: UpdateCnabDto) {
    return this.cnabsService.update(+id, updateCnabDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cnabsService.remove(+id);
  }
}
