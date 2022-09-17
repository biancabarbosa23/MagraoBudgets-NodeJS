import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductsController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createProductUseCase = new CreateProductUseCase();
    const result = await createProductUseCase.execute(name);

    return response.json(result);
  }
}
