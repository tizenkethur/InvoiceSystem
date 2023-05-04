import { LastLoginDateDomainModel } from "../models/domain/LastLoginDateDomainModel";
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

  async setLoginDateByUserId(userId: number, dateNow: string): Promise<void> {
    console.log(typeof dateNow);
    const query: string = `INSERT INTO lastLoginDates (userId, lastLoginDate, currentLoginDate) VALUES (?,?,?)`;
    await db.query<OkPacket>(query, [userId.toString(), dateNow, dateNow]);
  },

  async updateLoginDateByUserId(
    lastLoginDate: string,
    currentLoginDate: string,
    userId: number
  ): Promise<void> {
    const query: string = `UPDATE lastLoginDates SET lastLoginDate = ?, currentLoginDate = ? WHERE userId = ?`;

    await db.query<OkPacket>(query, [
      lastLoginDate,
      currentLoginDate,
      userId.toString(),
    ]);
  },
};
