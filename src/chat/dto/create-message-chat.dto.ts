import { User } from '../users/entities/user.entity';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageChatDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @Type(() => User)
  author: User;
}
