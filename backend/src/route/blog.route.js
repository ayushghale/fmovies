import {Router } from "express";
import BlogController from "../controller/blog.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

import CRUDController from "../controller/CRUD.controller.js";

const blogRouter = Router();

// blogRouter.post("/", async (req, res,next) => {
//   try {
//     const{title, subtitle, description} = req.body;
//     const blog = new Blog({title, subtitle, description});
//     const responseBlog = await blog.save();
//     return successHandler(res, responseBlog, `blog details`);
//   } catch (e) {
//     next(e); 
//   }
// });


// get all blogs
blogRouter.get("/", authMiddleware, BlogController.getAllBlogs);

// create new bog
blogRouter.post("/", authMiddleware, BlogController.createBlog);

// 

// get a blog by id
blogRouter.get("/:id", authMiddleware, BlogController.getBlog);

// add catrgory to blog
blogRouter.post("/:id/category", authMiddleware, BlogController.addCategoryToBlog);

// example route
blogRouter.get("/CRUD/getAllBlogs", CRUDController.getAllBlogs);
blogRouter.get("/CRUD/getBlog/:id", CRUDController.getBlog);
blogRouter.post("/CRUD/createBlog", CRUDController.createBlog);
blogRouter.put("/CRUD/updateBlog/:id", CRUDController.updateBlog);
blogRouter.delete("/CRUD/deleteBlog/:id", CRUDController.deleteBlog);


export default blogRouter;
