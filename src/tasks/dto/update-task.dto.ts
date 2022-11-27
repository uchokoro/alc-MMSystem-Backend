import { PartialType } from '@nestjs/swagger';
import { BaseTaskDto } from './base-task.dto';
import { TaskStatus } from '../entities/task.entity';
import { Programme } from '../../programmes/entities/programme.entity';
import { User } from '../../users/entities/user.entity';

export class UpdateTaskDto extends PartialType(BaseTaskDto) {
  title: string;
  description: string;
  status: TaskStatus;
  programme: Programme;
  lastUpdatedBy: User;
}
