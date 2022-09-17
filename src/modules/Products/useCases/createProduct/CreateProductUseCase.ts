import { prismaClient } from "../../../../database/prismaClient";
import { type Product } from "@prisma/client";

export class CreateProductUseCase {
  async execute(name: string): Promise<Product> {
    const productExists = await prismaClient.product.findFirst({
      where: {
        name,
      },
    });

    console.log(productExists);
    if (productExists) {
      throw new Error("Produto já existe");
    }

    const product = await prismaClient.product.create({
      data: {
        name,
      },
    });

    return product;
  }
}
