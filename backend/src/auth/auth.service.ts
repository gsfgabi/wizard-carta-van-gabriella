import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}
  

  async validateLogin(cnpj: string, token: string): Promise<boolean> {
    const user = await this.prisma.users.findUnique({
      where: { cnpj },
    });

    if (!user) {
      return false;
    }

    return user.token === token;
  }

  async login(cnpj: string) {
    const payload = { cnpj };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}