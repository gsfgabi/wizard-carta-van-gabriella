import { Module } from '@nestjs/common';
import { CnabsService } from './cnabs.service';
import { CnabsController } from './cnabs.controller';

@Module({
  controllers: [CnabsController],
  providers: [CnabsService],
})
export class CnabsModule {}
