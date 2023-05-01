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
    const query: string = `INSERT INTO users (username, password) VALUES (?, ?)`;

    const regResult = await db.query<OkPacket>(query, [username, password]);

    return regResult.insertId;
  },

  async getUserByName(username: string): Promise<UserDomainModel> {
    const query: string = `SELECT
                                *
                            FROM
                                users
                            WHERE
                                username = ?
      `;

    const userList = await db.query<UserDomainModel[]>(query, [username]);

    return userList[0];
  },
};
