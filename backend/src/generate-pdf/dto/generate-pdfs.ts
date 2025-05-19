import { CnabsDto } from 'src/cnabs/dto/select-cnabs.dto';
import { ProductsDto } from 'src/products/dto/select-products.dto';
import { VanTypesDto } from 'src/van-types/dto/select-van-types.dto';

export class GeneratePdfsDto {
  bank_name: string;
  manager_name: string;
  corporate_name: string;
  responsible_person_name: string;
  cnpj: string;
  branch_number: string;
  account_number: string;
  agreement_number: string;
  responsible_person_email: string;
  responsible_person_cellphone: string;
  responsible_person_title: string;
  manager_email: string;
  manager_cellphone: string;
  id_products: ProductsDto[];
  id_cnabs: CnabsDto[];
  id_van_types: VanTypesDto[];
}

