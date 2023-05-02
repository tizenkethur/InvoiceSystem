import { UserRegistrationRequestModel } from "models/common/UserRegistrationRequestModel";
import { userRepository } from "../repositories/userRepository";
import { conflictError, unauthorizedError } from "./generalErrorService";
import { passwordService } from "./passwordService";
import { roleService } from "./roleService";
import { UserLoginRequestViewModel } from "../models/common/UserLoginRequestViewModel";
import { jwtService } from "./JwtServices";
import { roleRepository } from "../repositories/roleRepository";
import { UserLoginViewModel } from "../models/view/UserLoginViewModel";
import { lastLoginDateRepository } from "../repositories/lastLoginDateRepository";
import { generateDateTimeToMysql } from "./dateService";
import { LastLoginDateDomainModel } from "models/domain/LastLoginDateDomainModel";

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

  async login(
    userData: UserLoginRequestViewModel
  ): Promise<UserLoginViewModel> {
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

    const getRoleTypeIdByUserId = await roleRepository.getRoleTypeIdByUserId(
      getUserByName.id
    );
    const token: string = await jwtService.generateAccessToken(
      getUserByName.id,
      getUserByName.username,
      getRoleTypeIdByUserId
    );

    const dateNow = generateDateTimeToMysql(new Date());

    const lastLoginDate =
      await lastLoginDateRepository.getLastLoginDateByUserId(getUserByName.id);

    if (!lastLoginDate) {
      await lastLoginDateRepository.setLastLoginDateByUserId(
        getUserByName.id,
        dateNow
      );
    } else {
      await lastLoginDateRepository.updateLastLoginDateByUserId(
        getUserByName.id,
        dateNow
      );
    }
    return {
      token,
      username: getUserByName.username,
      roleTypeId: getRoleTypeIdByUserId,
      // dateNow,
    };
  },
};
