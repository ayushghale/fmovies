import express from "express";
import userRouter from "./route/user.route.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import blogRouter from "./route/blog.route.js";
import commentRouter from "./route/comment.route.js";
import categoryRouter from "./route/category.route.js";
import blogCategoryRelRouter from "./route/blogCategoryRel.router.js";

const mainRouter = express.Router({ mergeParams: true });

mainRouter.use("/user",  userRouter);

mainRouter.use("/blog",  blogRouter);

mainRouter.use("/comment",commentRouter )

mainRouter.use("/category", categoryRouter)

mainRouter.use("/blogCategoryRelation", blogCategoryRelRouter)

export default mainRouter;
 