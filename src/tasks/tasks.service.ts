import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    const newTask = this.taskRepository.create({
      ...createTaskDto,
      created_at: new Date(),
    });
    return this.taskRepository.save(newTask);
  }

  findAll() {
    const tasks = this.taskRepository.find();
    return tasks;
  }

  findOne(id: {}) {
    const task = this.taskRepository.findOne({ where: id });
    return task;
  }

  findByStatus(task_status: string) {
    const task = this.taskRepository.findOneBy({ where: task_status });
    return `This action returns tasks by ${task_status} of task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update({ id }, { ...updateTaskDto });
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
