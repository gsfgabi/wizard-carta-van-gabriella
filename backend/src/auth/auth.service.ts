import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateLogin(cnpj: string, token: string): Promise<boolean> {
    // Aqui valida realmente seu login (ex: consulta no banco, etc)
    return cnpj === '12345678000199' && token === '123456';
  }

  async login(cnpj: string) {
    const payload = { cnpj }; 
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
