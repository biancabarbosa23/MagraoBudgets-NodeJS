import { Router } from "express";
import { CreateProductsController } from "./modules/Products/useCases/createProduct/CreateProductsController";
import { FindProductsController } from "./modules/Products/useCases/findProducts/FindProductsController";
import { CreateBudgetController } from "./modules/Budgets/useCases/createBudget/CreateBudgetController";
import { CreateBudgetProductsController } from "./modules/BudgetProducts/useCases/createBudgetProducts/CreateBudgetProductsController";

const router = Router();

// Products
const createProducts = new CreateProductsController();
const findProducts = new FindProductsController();

router.post("/product", createProducts.handle);
router.get("/products", findProducts.handle);

// Budget
const createBudget = new CreateBudgetController();

router.post("/budget", createBudget.handle);

// Budget Products
const createBudgetProducts = new CreateBudgetProductsController();

router.post("/budget/products", createBudgetProducts.handle);

export { router };
