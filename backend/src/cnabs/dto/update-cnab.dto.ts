import { PartialType } from '@nestjs/mapped-types';
import { CreateCnabDto } from './create-cnab.dto';

export class UpdateCnabDto extends PartialType(CreateCnabDto) {}
