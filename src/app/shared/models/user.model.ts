export interface User {
  id: number;
  name: string;
  login: string;
  password: string;
  role: Role;
}

export interface UserLogin {
  login: string;
  password: string;
}

export enum Role {
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER'
}

