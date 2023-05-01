import { roleRepository } from "../repositories/roleRepository";

export const roleService = {
  async getRoleTypeIdByRoleName(roleName: string): Promise<number> {
    const roleTypeId = await roleRepository.getRoleTypeIdByRoleName(roleName);
    return roleTypeId;
  },

  async registerRole(userId: number, roleName: string): Promise<number> {
    const roleTypeId = await this.getRoleTypeIdByRoleName(roleName);

    const newRoleId = await roleRepository.registerRole(userId, roleTypeId);
    return newRoleId;
  },
};
