import { RoleTypeDomainModel } from "models/domain/RoleTypeDomainModel";
import { db } from "../data/connection";
import { OkPacket } from "mysql";

export const roleRepository = {
  async getRoleTypeIdByRoleName(roleName: string): Promise<number> {
    const query: string = `SELECT * FROM roleTypes WHERE name = ?`;
    const roleTypeId = await db.query<RoleTypeDomainModel[]>(query, [roleName]);

    return roleTypeId[0].id;
  },

  async registerRole(userId: number, roleTypeId: number): Promise<number> {
    const query: string = `INSERT INTO roles (userId, roleTypeId) VALUES (?,?)`;
    const regResult = await db.query<OkPacket>(query, [
      userId.toString(),
      roleTypeId.toString(),
    ]);

    return regResult.insertId;
  },
};
