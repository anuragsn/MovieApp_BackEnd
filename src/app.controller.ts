/* eslint-disable prettier/prettier */
import { Controller, Get,Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { MoviesService } from './movies.service';
import { Movies as MoviesModel } from '@prisma/client';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly moviesService: MoviesService,private authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('AllMovies')
  async getPublishedPosts(): Promise<MoviesModel[]> {
    return this.moviesService.movies();
  }
}
