import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  findByStatus(task_status: string) {
    return `This action returns tasks by ${task_status} of task`
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} ${updateTaskDto}task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
