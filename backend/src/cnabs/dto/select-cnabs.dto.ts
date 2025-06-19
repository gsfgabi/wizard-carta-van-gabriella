import { ApiProperty } from '@nestjs/swagger';

export class CnabsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}