import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ProductsDto } from './dto/select-products.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOkResponse({ type: [ProductsDto] })

  findAllProducts() {
    return this.productsService.findAllProducts();
  }
}