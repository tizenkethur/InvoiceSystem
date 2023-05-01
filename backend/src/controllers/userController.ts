import { Request, Response, NextFunction } from "express";
import { badRequestError } from "src/services/generalErrorService";
import { userService } from "src/services/userService";

export const userController = {
  async checkIfUsernameExists(req: Request, res: Response, next: NextFunction) {
    const { username } = req.params;

    if (!username) {
      next(badRequestError("Please provide a username!"));
    }

    try {
      await userService.checkIfUsernameExists(username);
      res.status(200).send();
    } catch (err) {
      next(err);
    }
  },
};
