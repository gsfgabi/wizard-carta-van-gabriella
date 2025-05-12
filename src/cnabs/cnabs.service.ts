import { Injectable } from '@nestjs/common';
import { CreateCnabDto } from './dto/create-cnab.dto';
import { UpdateCnabDto } from './dto/update-cnab.dto';

@Injectable()
export class CnabsService {
  create(createCnabDto: CreateCnabDto) {
    return 'This action adds a new cnab';
  }

  findAll() {
    return `This action returns all cnabs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cnab`;
  }

  update(id: number, updateCnabDto: UpdateCnabDto) {
    return `This action updates a #${id} cnab`;
  }

  remove(id: number) {
    return `This action removes a #${id} cnab`;
  }
}
