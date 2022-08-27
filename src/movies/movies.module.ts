/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { PrismaService } from 'src/prisma.service';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService,PrismaService],
})
export class MoviesModule {}
