import { PartialType } from '@nestjs/swagger';
import { BaseTaskDto } from './base-task.dto';
import { User } from '../../users/entities/user.entity';

export class AssignTaskDto extends PartialType(BaseTaskDto) {
  assignedTo: User;
  assignedBy: User;
}
