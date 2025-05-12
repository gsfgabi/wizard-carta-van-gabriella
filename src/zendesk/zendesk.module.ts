import { Module } from '@nestjs/common';
import { ZendeskService } from './zendesk.service';
import { ZendeskController } from './zendesk.controller';

@Module({
  controllers: [ZendeskController],
  providers: [ZendeskService],
})
export class ZendeskModule {}
