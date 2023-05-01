import * as bcrypt from "bcrypt";

export const passwordService = {
  generateHash(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  },

  comparePasswords(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
  },

  generateVerificationCode(): number {
    return Math.floor(100000 + Math.random() * 900000);
  },
};
