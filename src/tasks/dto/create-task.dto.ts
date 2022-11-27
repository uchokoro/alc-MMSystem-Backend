import { Programme } from '../../programmes/entities/programme.entity';
import { BaseTaskDto } from './base-task.dto';
import { User } from '../../users/entities/user.entity';
import { PartialType } from '@nestjs/swagger';

export class CreateTaskDto extends PartialType(BaseTaskDto) {
  title: string;
  description: string;
  createdBy: User;
  programme: Programme;
}
