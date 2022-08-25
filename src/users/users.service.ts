/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'Admin',
      password: 'Admin@123',
    },
    {
      userId: 2,
      username: 'User',
      password: 'User@123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
