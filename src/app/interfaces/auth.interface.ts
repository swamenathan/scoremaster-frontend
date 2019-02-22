export interface ILoginDetails {
 'email': string;
 'password': string;
}

export interface IAuthInterface {
  'user': any;
  'token': string;
}

export interface ISignUpDetails {
  'email': string;
  'password1': string;
  'password2': string;
  'first_name': string;
  'last_name': string;
}
