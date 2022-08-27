/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Movies, Prisma } from '@prisma/client';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async movies(): Promise<Movies[]> {
    // eslint-disable-next-line prettier/prettier
    return this.prisma.movies.findMany();
  }
  async createMovies(data: Prisma.MoviesCreateInput): Promise<Movies> {
    return this.prisma.movies.create({
      data,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async moviesById(
    userWhereUniqueInput: Prisma.MoviesWhereUniqueInput,
  ): Promise<Movies | null> {
    return this.prisma.movies.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async updateMovie(params: {
    where: Prisma.MoviesWhereUniqueInput;
    data: Prisma.MoviesUpdateInput;
  }): Promise<Movies> {
    const { data, where } = params;
    return this.prisma.movies.update({
      data,
      where,
    });
  }
  async deleteMovie(where: Prisma.MoviesWhereUniqueInput): Promise<Movies> {
    return this.prisma.movies.delete({
      where,
    });
  }
}
