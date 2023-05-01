import { UserRegistrationRequestModel } from "models/common/UserRegistrationRequestModel";
import { userRepository } from "../repositories/userRepository";
import { conflictError } from "./generalErrorService";
import { passwordService } from "./passwordService";
import { roleService } from "./roleService";

export const userService = {
  async checkIfUsernameExists(username: string): Promise<boolean> {
    return await userRepository.checkIfUsernameExists(username);
  },

  async registerUser(userData: UserRegistrationRequestModel): Promise<void> {
    const userNameCheck = await this.checkIfUsernameExists(userData.username);

    if (userNameCheck) {
      throw conflictError("Username is already taken.");
    }

    const hashedPassword = passwordService.generateHash(userData.password);

    const newUserId = await userRepository.registerUser(
      userData.username,
      hashedPassword
    );

    await roleService.registerRole(newUserId, userData.role);
  },
};
