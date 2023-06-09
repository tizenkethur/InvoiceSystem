import { Request, Response, NextFunction } from "express";
import {
  badRequestError,
  conflictError,
} from "../services/generalErrorService";
import { userService } from "../services/userService";
import { UserRegistrationRequestModel } from "models/common/UserRegistrationRequestModel";
import { UserLoginRequestViewModel } from "models/common/UserLoginRequestViewModel";
import { UserLoginViewModel } from "models/view/UserLoginViewModel";
import { UserListViewModel } from "models/view/UserListViewModel";

export const userController = {
  async checkIfUsernameExists(req: Request, res: Response, next: NextFunction) {
    const { username } = req.params;

    if (!username) {
      next(badRequestError("Username is required."));
      return;
    }

    try {
      const isUsernameExists = await userService.checkIfUsernameExists(
        username
      );

      if (isUsernameExists) {
        next(conflictError("Username is already taken."));
        return;
      }

      res.status(200).send(isUsernameExists);
    } catch (err) {
      next(err);
    }
  },

  async register(req: Request, res: Response, next: NextFunction) {
    const { username, password, role } = req.body;

    if (!username && !password && !role) {
      next(badRequestError("Username, password and email are required."));
      return;
    }

    if (!username) {
      next(badRequestError("Username is required."));
      return;
    }

    if (!password) {
      next(badRequestError("Password is required."));
      return;
    }

    if (password.length < 8) {
      next(badRequestError("Password must be 8 characters."));
      return;
    }

    if (!role) {
      next(badRequestError("Please choose a role!"));
      return;
    }

    const registrationData: UserRegistrationRequestModel = {
      username,
      password,
      role,
    };

    try {
      await userService.registerUser(registrationData);
      res.status(201).send();
    } catch (err) {
      next(err);
    }
  },

  async login(
    request: Request<UserLoginRequestViewModel>,
    response: Response<UserLoginViewModel>,
    next: NextFunction
  ) {
    const { username, password } = request.body;

    if (!username && !password) {
      next(badRequestError("All fields are required"));
      return;
    }

    if (!password) {
      next(badRequestError("Password is required"));
      return;
    }

    if (!username) {
      next(badRequestError("Username is required"));
      return;
    }

    const loginData: UserLoginRequestViewModel = {
      username: username,
      password: password,
    };

    try {
      const userData = await userService.login(loginData);
      response.status(200).send(userData);
    } catch (error) {
      next(error);
    }
  },
  async getUserList(
    req: Request,
    res: Response<UserListViewModel>,
    next: NextFunction
  ) {
    try {
      const data = await userService.getUserList();
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  },

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const data = await userService.deleteUser(id);
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  },
};
