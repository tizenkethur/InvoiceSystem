import { db } from "src/data/connection";
import { UserDomainModel } from "src/models/domain/UserDomainModel";

export const userRepository = {
  async checkIfUsernameExists(username: string): Promise<boolean> {
    const query: string = `SELECT * FROM users WHERE username = ?`;

    const userData = await db.query<UserDomainModel[]>(query, [username]);
    console.log(userData);
    return !!userData[0].username;
  },
};
