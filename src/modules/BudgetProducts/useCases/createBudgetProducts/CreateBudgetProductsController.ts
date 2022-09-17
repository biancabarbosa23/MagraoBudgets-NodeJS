import { Request, Response } from "express";
import { CreateBudgetProductsUseCase } from "./CreateBudgetProductsUseCase";

export class CreateBudgetProductsController {
  async handle(request: Request, response: Response) {
    const budgetProductsData = request.body;

    const createBudgetProductsUseCase = new CreateBudgetProductsUseCase();
    const result = await createBudgetProductsUseCase.execute(
      budgetProductsData
    );

    return response.json(result);
  }
}
