export interface JwtTokenPayloadModel {
  userId: number;
  roleTypeId: number;
  username: string;
  iat: number;
  exp: number;
}
