import { RoleTypeDomainModel } from "models/domain/RoleTypeDomainModel";
import { db } from "../data/connection";
import { OkPacket } from "mysql";
import { RoleDomainModel } from "models/domain/RoleDomainModel";

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

  async getRoleTypeIdByUserId(userId: number): Promise<number> {
    const query: string = `SELECT * from ROLES WHERE userId=?`;
    const roleData = await db.query<RoleDomainModel[]>(query, [
      userId.toString(),
    ]);

    return roleData[0].roleTypeId;
  },
};
