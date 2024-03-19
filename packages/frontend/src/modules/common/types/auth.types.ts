export interface IAuthLogin {
  email: string;
  password: string;
}

export interface IAuthRegister extends IAuthLogin {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}
