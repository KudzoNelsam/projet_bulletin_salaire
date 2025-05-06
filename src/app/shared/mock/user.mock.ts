import {Role, User} from '../models/user.model';

export const USER_MOCK: User[] = [
  {
    id: 1,
    name: 'John',
    login: 'john@example.com',
    password: 'john@123',
    role: Role.ADMIN,
  },
  {
    id: 2,
    name: 'Jane',
    login: 'jane@example.com',
    password: 'jane@123',
    role: Role.USER,
  }
];
