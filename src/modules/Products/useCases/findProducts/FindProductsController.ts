import { Request, Response } from "express";
import { FindProductsUseCase } from "./FindProductsUseCase";
import { FindProductsDTO } from "../../dtos/FindProductsDTO";

export class FindProductsController {
  async handle(request: Request, response: Response) {
    const { name, page, itemsPerPage } =
      request.query as unknown as FindProductsDTO;

    const findProductsUseCase = new FindProductsUseCase();
    const result = await findProductsUseCase.execute({
      name,
      page,
      itemsPerPage,
    });

    return response.json(result);
  }
}
