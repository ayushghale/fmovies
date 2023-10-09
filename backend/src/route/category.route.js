import { Router } from "express";

import CategoryController from "../controller/category.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const categoryRouter = Router();


// get all categories
categoryRouter.get("/", CategoryController.getAllCategories);

// get a category by id
categoryRouter.get("/:categoryId", CategoryController.categoryById);

// add a category
categoryRouter.post("/", authMiddleware, CategoryController.addCategory);

export default categoryRouter;