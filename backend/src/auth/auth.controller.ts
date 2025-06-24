import { Body, Controller, Post, UnauthorizedException, HttpCode } from '@nestjs/common';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiOperation, ApiUnauthorizedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  @ApiOperation({ summary: 'Autenticar via CNPJ e Token' })
  @ApiOkResponse({
    description: 'Login realizado com sucesso. (OK)',
    type: LoginResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'CNPJ ou Token inválido. (Unauthorized)',
  })
  @ApiBadRequestResponse({
    description: 'Requisição malformada. (Bad Request).',
  })
  async login(@Body() body: LoginDto) {
    const isValid = await this.authService.validateLogin(body.cnpj, body.token);

    if (!isValid) {
      throw new UnauthorizedException('CNPJ ou Token inválido.');
    }

    return this.authService.login(body.cnpj);
  }
}