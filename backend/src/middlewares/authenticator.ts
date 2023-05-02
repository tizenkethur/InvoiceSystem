import { Request, Response, NextFunction } from "express";
import { unauthorizedError } from "../services/generalErrorService";
import { jwtService } from "../services/JwtServices";

export default async function getTokenFromRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = jwtService.getTokenFromRequest(req);

  if (!token) {
    next(unauthorizedError("user logged out"));
    return;
  }

  next();
}
