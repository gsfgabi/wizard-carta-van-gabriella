import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZendeskService } from './zendesk.service';
import { CreateZendeskDto } from './dto/create-zendesk.dto';
import { UpdateZendeskDto } from './dto/update-zendesk.dto';

@Controller('zendesk')
export class ZendeskController {
  constructor(private readonly zendeskService: ZendeskService) {}

  @Post()
  create(@Body() createZendeskDto: CreateZendeskDto) {
    return this.zendeskService.create(createZendeskDto);
  }

  @Get()
  findAll() {
    return this.zendeskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zendeskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZendeskDto: UpdateZendeskDto) {
    return this.zendeskService.update(+id, updateZendeskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zendeskService.remove(+id);
  }
}
