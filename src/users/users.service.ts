/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export type User = any;

@Injectable()
export class UsersService {
  constructor(private prismaService:PrismaService){}
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'Admin',
  //     password: 'Admin@123',
  //   },
  //   {
  //     userId: 2,
  //     username: 'User',
  //     password: 'User@123',
  //   },
  // ];

  async findOne(username: string): Promise<User | undefined> {
    // return this.users.find((user) => user.username === username);
    const where:Prisma.usersWhereInput = {
      username:username
    }
   return await this.prismaService.users.findFirst({
    where:where
    })

  }
}
