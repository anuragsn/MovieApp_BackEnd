import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesService } from './movies.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  // eslint-disable-next-line prettier/prettier
  providers: [AppService,MoviesService,PrismaService, ],
})
export class AppModule {}
