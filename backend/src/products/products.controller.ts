import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ProductsDto } from './dto/select-products.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id')
  @ApiOkResponse({ type: [ProductsDto] })

  findAllByBankId(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findAllByBankId(id);
  }
}