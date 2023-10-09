import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import BlogCategoryRelController from "../controller/blogCategoryRel.controller.js";

const blogCategoryRelRouter = Router();

// get - all blog category rel
// route - localhost:8080/api/blogCategoryRel
blogCategoryRelRouter.get("/",authMiddleware, BlogCategoryRelController.getAllBlogCategoryRel);

// post - create a blog category rel
// route -  localhost:8080/api/blogCategoryRel
blogCategoryRelRouter.post("/",authMiddleware, BlogCategoryRelController.createBlogCategoryRel);

export default blogCategoryRelRouter;