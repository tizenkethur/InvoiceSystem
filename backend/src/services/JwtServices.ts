import config from "../config";
import * as jwt from "jsonwebtoken";
import { Request } from "express";
import { JwtTokenPayloadModel } from "models/common/JwtTokenPayloadModel";

export const jwtService = {
  generateAccessToken(
    userId: number,
    username: string,
    roleTypeId: number
  ): string {
    const payLoad = {
      userId: userId,
      userName: username,
      roleTypeId: roleTypeId,
    };

    return jwt.sign(payLoad, config.jwt.secretKey as string, {
      expiresIn: "1d",
    });
  },

  getTokenFromRequest(req: Request<any>): string {
    return req.headers.authorization?.split(" ")[1] as string;
  },

  getTokenPayload(token: string): JwtTokenPayloadModel {
    return jwt.decode(token) as JwtTokenPayloadModel;
  },
};
