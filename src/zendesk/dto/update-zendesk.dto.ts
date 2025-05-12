import { PartialType } from '@nestjs/mapped-types';
import { CreateZendeskDto } from './create-zendesk.dto';

export class UpdateZendeskDto extends PartialType(CreateZendeskDto) {}
