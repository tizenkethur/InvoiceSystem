import { Request, Response, NextFunction } from "express";
import { badRequestError } from "../services/generalErrorService";
import { userService } from "../services/userService";

export const userController = {
  async checkIfUsernameExists(req: Request, res: Response, next: NextFunction) {
    const { username } = req.params;

    try {
      const isUsernameExists = await userService.checkIfUsernameExists(
        username
      );
      res.status(200).send(isUsernameExists);
    } catch (err) {
      next(err);
    }
  },
};
