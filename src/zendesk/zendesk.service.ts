import { Injectable } from '@nestjs/common';
import { CreateZendeskDto } from './dto/create-zendesk.dto';
import { UpdateZendeskDto } from './dto/update-zendesk.dto';

@Injectable()
export class ZendeskService {
  create(createZendeskDto: CreateZendeskDto) {
    return 'This action adds a new zendesk';
  }

  findAll() {
    return `This action returns all zendesk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zendesk`;
  }

  update(id: number, updateZendeskDto: UpdateZendeskDto) {
    return `This action updates a #${id} zendesk`;
  }

  remove(id: number) {
    return `This action removes a #${id} zendesk`;
  }
}
