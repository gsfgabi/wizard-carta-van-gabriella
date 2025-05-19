import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ZapierService } from './zapier.service';

@Module({
  imports: [HttpModule],
  providers: [ZapierService],
  exports: [ZapierService],
})
export class ZapierModule {}