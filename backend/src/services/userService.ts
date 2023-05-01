import { UserRegistrationRequestModel } from "models/common/UserRegistrationRequestModel";
import { userRepository } from "../repositories/userRepository";
import { conflictError, unauthorizedError } from "./generalErrorService";
import { passwordService } from "./passwordService";
import { roleService } from "./roleService";
import { UserLoginRequestViewModel } from "models/common/UserLoginRequestViewModel";

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

  async login(userData: UserLoginRequestViewModel): Promise<void> {
    const getUserByName = await userRepository.getUserByName(userData.username);

    if (
      !getUserByName ||
      !passwordService.comparePasswords(
        userData.password,
        getUserByName.password
      )
    ) {
      throw unauthorizedError("Username or password is incorrect!");
    }

    return;
  },
};
