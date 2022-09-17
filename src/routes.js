import { Router } from "express";
import { CreateProductsController } from "./modules/Products/useCases/createProduct/CreateProductsController";
import { FindProductsController } from "./modules/Products/useCases/findProducts/FindProductsController";

const router = Router();

// Products
const createProducts = new CreateProductsController();
const findProducts = new FindProductsController();

router.post("/product", createProducts.handle);
router.get("/products", findProducts.handle);

export { router };
