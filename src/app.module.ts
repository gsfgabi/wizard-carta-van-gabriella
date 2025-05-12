import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BanksModule } from './banks/banks.module';
import { ProductsModule } from './products/products.module';
import { CnabsModule } from './cnabs/cnabs.module';
import { FormsModule } from './forms/forms.module';
import { PdfsModule } from './pdfs/pdfs.module';
import { ZendeskModule } from './zendesk/zendesk.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, BanksModule, ProductsModule, CnabsModule, FormsModule, PdfsModule, ZendeskModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
