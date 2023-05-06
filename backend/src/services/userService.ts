import { UserDomainModel } from "./../models/domain/UserDomainModel";
import { UserRegistrationRequestModel } from "../models/common/UserRegistrationRequestModel";
import { userRepository } from "../repositories/userRepository";
import { conflictError, unauthorizedError } from "./generalErrorService";
import { passwordService } from "./passwordService";
import { roleService } from "./roleService";
import { UserLoginRequestViewModel } from "../models/common/UserLoginRequestViewModel";
import { jwtService } from "./JwtServices";
import { roleRepository } from "../repositories/roleRepository";
import { UserLoginViewModel } from "../models/view/UserLoginViewModel";
import { lastLoginDateRepository } from "../repositories/lastLoginDateRepository";
import {
  generateDateTimeToMysql,
  getDateTimeBackFromMysql,
} from "./dateService";
import { UserListViewModel } from "models/view/UserListViewModel";
import { UserViewModel } from "models/view/UserViewModel";

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
      await lastLoginDateRepository.setLoginDateByUserId(
        getUserByName.id,
        dateNow
      );
    } else {
      await lastLoginDateRepository.updateLoginDateByUserId(
        getDateTimeBackFromMysql(lastLoginDate.currentLoginDate),
        dateNow,
        getUserByName.id
      );
    }

    const lastLoginDateToDisplay =
      await lastLoginDateRepository.getLastLoginDateByUserId(getUserByName.id);

    return {
      token,
      username: getUserByName.username,
      roleTypeId: getRoleTypeIdByUserId,
      lastLoginDate: getDateTimeBackFromMysql(
        lastLoginDateToDisplay.lastLoginDate
      ),
    };
  },

  async getUserList(): Promise<UserListViewModel> {
    const userData: UserDomainModel[] = await userRepository.getUsers();

    return {
      userList: userData.map<UserViewModel>((userData) => {
        return {
          id: userData.id,
          username: userData.username,
        };
      }),
    };
  },

  async deleteUser(userId: string): Promise<number> {
    return await userRepository.deleteUser(userId);
  },
};
