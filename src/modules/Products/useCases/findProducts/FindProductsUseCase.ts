import { prismaClient } from "../../../../database/prismaClient";
import { FindProductsDTO } from "../../dtos/FindProductsDTO";
import { type Product } from "@prisma/client";

export class FindProductsUseCase {
  async execute({
    name,
    page,
    itemsPerPage,
  }: FindProductsDTO): Promise<Product[]> {
    const take = Number(itemsPerPage);
    const skip = (Number(page) - 1) * take;

    const products = await prismaClient.product.findMany({
      skip,
      take,
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });

    return products;
  }
}
