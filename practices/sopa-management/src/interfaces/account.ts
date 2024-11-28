export interface Account {
  id: string;
  email: string;
  password: string;
};

export interface LoginType {
  default: '',
  info: 'info',
  error: 'error'
};

export enum CheckType {
  login = 'login',
  email = 'email',
  password = 'password'
}
