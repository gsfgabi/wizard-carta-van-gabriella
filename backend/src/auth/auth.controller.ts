import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const isValid = await this.authService.validateLogin(body.cnpj, body.token);

    if (!isValid) {
      throw new UnauthorizedException('CNPJ ou token inválido.');
    }

    return this.authService.login(body.cnpj);
  }
}