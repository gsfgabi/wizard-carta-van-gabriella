import { ProductsDto } from 'src/products/dto/select-products.dto';

export class GeneratePdfsDto {
  title: string;
  generatedAt: string;
  products: ProductsDto[];
  reportTypes: string[];
}