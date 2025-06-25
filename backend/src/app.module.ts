import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BanksModule } from './banks/banks.module';
import { ProductsModule } from './products/products.module';
import { CnabsModule } from './cnabs/cnabs.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { VanTypesModule } from './van-types/van-types.module';
import { GeneratePdfsModule } from './pdf/generate-pdfs.module';
import { ReportSubmissionsModule } from './report-submissions/report-submissions.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import { ZapierModule } from './zapier/zapier.module';
import { AuthorizationModule} from './authorization-letters/authorization-letters.module';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';


@Module({
  imports: 
  [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
    validationSchema: Joi.object({
      JWT_SECRET: Joi.string().required(),
      DATABASE_URL: Joi.string().required(),
    }),
  }),
  
  AuthModule,
  AuthorizationModule,
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