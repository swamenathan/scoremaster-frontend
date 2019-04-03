export interface ILoginDetails {
 'email': string;
 'password': string;
}

export interface IAuthInterface {
  'user': IUser;
  'token': string;
}

export interface IUser {
  'pk': string;
  'username': string;
  'email': string;
  'first_name': string;
  'last_name': string;
}

export interface ISignUpDetails {
  'email': string;
  'password1': string;
  'password2': string;
  'first_name': string;
  'last_name': string;
}
