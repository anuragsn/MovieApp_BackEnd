import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Movies, Prisma } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async movies(): Promise<Movies[]> {
    // eslint-disable-next-line prettier/prettier

    return this.prisma.movies.findMany();
  }
}
