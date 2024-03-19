export interface IUser {
  id: number | string;
  firstName: string;
  lastName: string;
  isActivated: boolean;
  email: string;
}

export interface IUserChangePassword {
  oldPassword: string;
  newPassword: string;
}

export interface ILoginSchema {
  email: string;
  password: string;
}

export interface ISignUpSchema extends ILoginSchema {
  firstName: string;
  lastName: string;
  confirmPassword?: string;
}

export interface ISignUpSchemaReset extends ILoginSchema {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface IUserResponse extends IUser {
  token: string;
}
