import { ApiProperty } from '@nestjs/swagger';

export class ProductsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  icon: string;

  @ApiProperty()
  avaliable: string;
}