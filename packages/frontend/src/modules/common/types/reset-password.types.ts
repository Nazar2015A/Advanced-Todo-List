export interface IForgotPassword {
  email: string;
}
export interface IRestorePassword {
  password: string;
}
export interface IRestorePasswordWithToken extends IRestorePassword {
  token: string;
}
