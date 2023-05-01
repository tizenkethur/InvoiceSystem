import { OkPacket } from "mysql";
import { db } from "../data/connection";
import { UserDomainModel } from "../models/domain/UserDomainModel";

export const userRepository = {
  async checkIfUsernameExists(username: string): Promise<boolean> {
    const query: string = `SELECT * FROM users WHERE username = ?`;

    const userData = await db.query<UserDomainModel[]>(query, [username]);
    return !!userData[0];
  },

  async registerUser(username: string, password: string): Promise<number> {
    const query: string = `INSERT INTO users (name, password) VALUES (?, ?)`;

    const regResult = await db.query<OkPacket>(query, [username, password]);

    return regResult.insertId;
  },

  async registerRole(userId: number, roleName: string): Promise<number> {
    const query: string = `INSERT INTO roles (userId, roleName) VALUES (?,?)`;

    const regResult = await db.query<OkPacket>(query, [
      userId.toString(),
      roleName,
    ]);

    return regResult.insertId;
  },
};
