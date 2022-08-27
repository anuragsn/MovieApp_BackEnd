import {
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movies as MoviesModel } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('AllMovies')
  async getPublishedPosts(): Promise<MoviesModel[]> {
    return this.moviesService.movies();
  }

  @UseGuards(JwtAuthGuard)
  @Post('Movie')
  async createMovie(
    @Body() movieData: { name?: string; email: string },
  ): Promise<MoviesModel> {
    return this.moviesService.createMovies(movieData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('Movie/:id')
  async getPostById(@Param('id') id: string): Promise<MoviesModel> {
    return this.moviesService.moviesById({ id: Number(id) });
  }

  @UseGuards(JwtAuthGuard)
  @Put('Movie/:id')
  async publishPost(
    @Param('id') id: string,
    @Body()
    postData: {
      name: string;
      image_url?: string;
      time: string;
      type: string;
      description: string;
    },
  ): Promise<MoviesModel> {
    return this.moviesService.updateMovie({
      where: { id: Number(id) },
      data: {
        name: postData.name,
        image_url: postData.image_url,
        time: postData.time,
        type: postData.type,
        description: postData.description,
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('Movie/:id')
  async deletePost(@Param('id') id: string): Promise<MoviesModel> {
    return this.moviesService.deleteMovie({ id: Number(id) });
  }
}
