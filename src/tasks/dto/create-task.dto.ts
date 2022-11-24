import { User } from 'src/users/entities/user.entity';

export class CreateTaskDto {
  title: string;
  description: string;
  created_by: User;
}
