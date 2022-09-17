import { prismaClient } from "../../../../database/prismaClient";
import { type Budget } from "@prisma/client";

interface CreateBudgetDTO extends Omit<Budget, "id" | "created_at"> {}

export class CreateBudgetUseCase {
  async execute(data: CreateBudgetDTO): Promise<Budget> {
    const budget = await prismaClient.budget.create({
      data,
    });

    return budget;
  }
}
