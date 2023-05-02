import { LastLoginDateDomainModel } from "models/domain/LastLoginDateDomainModel";
import { db } from "../data/connection";
import { OkPacket } from "mysql";

export const lastLoginDateRepository = {
  async getLastLoginDateByUserId(
    userId: number
  ): Promise<LastLoginDateDomainModel> {
    const query: string = `SELECT * FROM lastLoginDates WHERE userId = ?`;

    const loginDateData: LastLoginDateDomainModel[] = await db.query(query, [
      userId.toString(),
    ]);

    return loginDateData[0];
  },

  async setLastLoginDateByUserId(
    userId: number,
    dateNow: string
  ): Promise<void> {
    const query: string = `INSERT INTO lastLoginDates (userId, lastLoginDate) VALUES (?,?)`;
    await db.query<OkPacket>(query, [userId.toString(), dateNow]);
  },

  async updateLastLoginDateByUserId(
    userId: number,
    dateNow: string
  ): Promise<void> {
    const query: string = `UPDATE lastLoginDates SET userId = ?, lastLoginDate = ?`;

    await db.query<OkPacket>(query, [userId.toString(), dateNow]);
  },
};
