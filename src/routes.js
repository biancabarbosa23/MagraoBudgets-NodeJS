import { Router } from "express";
import { CreateProductsController } from "./modules/Products/useCases/createProduct/CreateProductsController";
import { FindProductsController } from "./modules/Products/useCases/findProducts/FindProductsController";
import { CreateBudgetController } from "./modules/Budgets/useCases/createBudget/CreateBudgetController";

const router = Router();

// Products
const createProducts = new CreateProductsController();
const findProducts = new FindProductsController();

router.post("/product", createProducts.handle);
router.get("/products", findProducts.handle);

// Budget
const createBudget = new CreateBudgetController();

router.post("/budget", createBudget.handle);

export { router };
