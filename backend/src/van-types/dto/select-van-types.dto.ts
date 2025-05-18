import { ApiProperty } from '@nestjs/swagger';

export class VanTypesDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  type: string;

  @ApiProperty()
  avaliable: string;
}