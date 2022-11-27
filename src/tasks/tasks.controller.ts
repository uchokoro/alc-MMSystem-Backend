import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { TaskStatus } from './entities/task.entity';
import { TasksService } from './tasks.service';
import { AssignTaskDto } from './dto/assign-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createNewTask(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.createNewTask(createTaskDto);
  }

  @Get()
  async getAllTasks() {
    return await this.tasksService.findAllTasks();
  }

  @Get(':id')
  async getOneTaskById(@Param('id') id: number) {
    const task = await this.tasksService.findOneById(id);
    if (!task) throw new NotFoundException();
    return task;
  }

  @Get('assignees/:assigneeId')
  async getTasksByAssigneeId(@Param('assigneeId') assigneeId: number) {
    return await this.tasksService.findByAssigneeId(assigneeId);
  }

  @Get('assigners/:assignerId')
  async getTasksByAssignerId(@Param('assignerId') assignerId: number) {
    return await this.tasksService.findByAssignerId(assignerId);
  }

  @Get('creation-dates/start/:startDate/end/:endDate')
  async getTasksByCreationDateRange(
    @Param('startDate') startDate: Date, @Param('endDate') endDate: Date,
  ) {
    const queryEndDate = new Date(endDate);
    queryEndDate.setDate(queryEndDate.getDate() + 1);
    return this.tasksService.findByCreationDateRange(startDate, queryEndDate);
  }

  @Get('creators/:creatorId')
  async getTasksByCreatorId(@Param('creatorId') creatorId: number) {
    return await this.tasksService.findByCreatorId(creatorId);
  }

  @Get('programmes/:programmeId')
  async getTasksByProgrammeId(@Param('programmeId') programmeId: number) {
    return await this.tasksService.findByProgrammeId(programmeId);
  }

  @Get('status/:taskStatus')
  async getTasksByStatus(@Param('taskStatus') taskStatus: TaskStatus) {
    return await this.tasksService.findByStatus(taskStatus);
  }

  @Patch('assignments/:id')
  async assignTaskToUser(
    @Param('id') id: number,
    @Body() assignTaskDto: AssignTaskDto,
  ) {
    await this.tasksService.assignTaskToUser(id, assignTaskDto);
  }

  @Patch(':id')
  async updateTaskDetails(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    await this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete('soft/:id')
  async softDeleteTask(@Param('id') id: number) {
    await this.tasksService.softDeleteTask(id);
  }

  @Patch('soft/:id')
  async restoreSoftDeletedTask(@Param('id') id: number) {
    await this.tasksService.restoreSoftDeletedTask(id);
  }

  @Delete('hard/:id')
  async hardDeleteTask(@Param('id') id: number) {
    await this.tasksService.hardDeleteTask(id);
  }
}
