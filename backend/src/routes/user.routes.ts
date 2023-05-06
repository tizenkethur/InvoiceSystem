import express from "express";
import { userController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(
  "/checkUsername/:username",
  userController.checkIfUsernameExists
);
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

userRouter.get("/userList", userController.getUserList);
export default userRouter;
