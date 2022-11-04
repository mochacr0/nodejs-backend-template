import express from "express";
import userController from "../controllers/user.controller.js";
import expressAsyncHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.get("/", expressAsyncHandler(userController.findAll));

export default userRouter;
