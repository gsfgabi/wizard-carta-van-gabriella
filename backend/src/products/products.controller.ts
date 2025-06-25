import { Controller, Get, UseGuards, HttpCode } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiOperation, ApiUnauthorizedResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { ProductsDto } from './dto/select-products.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Buscar todos os produtos' })
  @ApiOkResponse({
    description: '(OK)',
    type: ProductsDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuario não autenticado. (Unauthorized)',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno no servidor. (Internal Server Error)',
  })
  findAllProducts() {
    return this.productsService.findAllProducts();
  }
}