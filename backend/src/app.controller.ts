import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Bem-vindo a API de Carta de Van Bancária!')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Tela inicial da api de Carta de Van Bancária' })
  getHello(): string {
    return this.appService.getHello();
  }
}
