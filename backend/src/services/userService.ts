import { userRepository } from "../repositories/userRepository";

export const userService = {
  async checkIfUsernameExists(username: string): Promise<boolean> {
    return await userRepository.checkIfUsernameExists(username);
  },
};
