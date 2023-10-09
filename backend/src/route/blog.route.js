import {Router } from "express";
import BlogController from "../controller/blog.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

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



export default blogRouter;
