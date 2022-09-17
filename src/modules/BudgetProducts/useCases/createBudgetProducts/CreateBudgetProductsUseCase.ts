import { prismaClient } from "../../../../database/prismaClient";
import { type Budget_products } from "@prisma/client";

interface CreateBudgetProductsDTO
  extends Omit<Budget_products, "id" | "created_at"> {}

export class CreateBudgetProductsUseCase {
  async execute(data: CreateBudgetProductsDTO): Promise<Budget_products> {
    const budgetProduct = await prismaClient.budget_products.create({
      data,
    });

    return budgetProduct;
  }
}
