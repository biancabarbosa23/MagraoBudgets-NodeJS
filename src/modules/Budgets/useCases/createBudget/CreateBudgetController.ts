import { Request, Response } from "express";
import { CreateBudgetUseCase } from "./CreateBudgetUseCase";

export class CreateBudgetController {
  async handle(request: Request, response: Response) {
    const budgetData = request.body;

    const createBudgetUseCase = new CreateBudgetUseCase();
    const result = await createBudgetUseCase.execute(budgetData);

    return response.json(result);
  }
}
