import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BanksModule } from './banks/banks.module';
import { ProductsModule } from './products/products.module';
import { CnabsModule } from './cnabs/cnabs.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { VanTypesModule } from './van-types/van-types.module';
import { GeneratePdfsModule } from './generate-pdf/generate-pdfs.module';
import { ReportSubmissionsModule } from './report-submissions/report-submissions.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import { ZapierModule } from './zapier/zapier.module';
import { authorizationLettersModule } from './authorization-letters/authorization-letters.module';

@Module({
  imports: 
  [ConfigModule.forRoot({
    isGlobal: true,
  }),
  authorizationLettersModule,
  BanksModule, 
  ProductsModule, 
  CnabsModule, 
  PrismaModule, 
  VanTypesModule, 
  GeneratePdfsModule, 
  ReportSubmissionsModule, 
  EmailModule, 
  ZapierModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
