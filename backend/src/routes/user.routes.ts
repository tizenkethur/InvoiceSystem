import express from "express";
import { userController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(
  "/checkUsername/:username",
  userController.checkIfUsernameExists
);

export default userRouter;
