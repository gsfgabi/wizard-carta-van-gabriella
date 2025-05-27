import { ApiProperty } from '@nestjs/swagger';

export class BanksDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  code: string;
}