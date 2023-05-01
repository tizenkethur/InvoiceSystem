import { db } from "../data/connection";
import { UserDomainModel } from "../models/domain/UserDomainModel";

export const userRepository = {
  async checkIfUsernameExists(username: string): Promise<boolean> {
    const query: string = `SELECT * FROM users WHERE username = ?`;

    const userData = await db.query<UserDomainModel[]>(query, [username]);
    return !!userData[0];
  },
};
