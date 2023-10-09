import { Router } from "express";
import AdmniAuth from "../../controller/auth/adminAuth.controller";

const adminRouter = Router();

adminRouter.get("/",AdmniAuth.login);