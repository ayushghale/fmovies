import { Router } from "express";
import UserController from "../controller/user.controller.js";
import authMiddleware, { authorizeAdminRole } from "../middlewares/authMiddleware.js";
const userRouter = Router();

// test route
userRouter.get("/protected", authorizeAdminRole(), (req, res) => {
  console.log("injected value");
});

// user route
userRouter.get("/details",authMiddleware, UserController.getAllUsers);

userRouter.post("/register", UserController.registerUser);

userRouter.post("/login", UserController.userLogin);

userRouter.post("/delete/:id", authMiddleware, UserController.deleteUser);

export default userRouter;
