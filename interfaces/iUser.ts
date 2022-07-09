export default interface IUser {
  nickname: string;
  email: string;
  password?: string;
  date?: Date;
  hashRt?: string | null;
  permissions?: Array<string>;
}
