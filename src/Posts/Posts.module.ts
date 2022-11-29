import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { PostsService } from './Post.service';
import { PostController } from './Posts.controller';
import { PostEntity } from './Posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, PostEntity])],
  controllers: [PostController],
  providers: [PostsService],
})
export class PostsModule {}
