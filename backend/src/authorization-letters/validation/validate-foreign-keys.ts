import { PrismaClient } from '@prisma/client';
import { BadRequestException } from '@nestjs/common';

const prisma = new PrismaClient();

export async function validateForeignKeys(data: {
  id_banks: number;
  id_cnabs: number;
  id_products: number[];
  id_van_types: number[];
}) {
  const { id_banks, id_cnabs, id_products, id_van_types } = data;

  const [bank, cnab] = await Promise.all([
    prisma.banks.findUnique({ where: { id: id_banks } }),
    prisma.cnabs.findUnique({ where: { id: id_cnabs } }),
  ]);

  if (!bank) throw new BadRequestException(`Banco com id ${id_banks} não existe.`);
  if (!cnab) throw new BadRequestException(`CNAB com id ${id_cnabs} não existe.`);

  const foundProducts = await prisma.products.findMany({
    where: { id: { in: id_products } },
  });

  const notFoundProducts = id_products.filter(
    (id) => !foundProducts.find((p) => p.id === id),
  );

  if (notFoundProducts.length > 0) {
    throw new BadRequestException(
      `Os seguintes id_products são inválidos: ${notFoundProducts.join(', ')}`,
    );
  }

  const foundVanTypes = await prisma.van_types.findMany({
    where: { id: { in: id_van_types } },
  });

  const notFoundVans = id_van_types.filter(
    (id) => !foundVanTypes.find((v) => v.id === id),
  );

  if (notFoundVans.length > 0) {
    throw new BadRequestException(
      `Os seguintes id_van_types são inválidos: ${notFoundVans.join(', ')}`,
    );
  }
}
