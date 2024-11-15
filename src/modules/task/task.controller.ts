import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { MyResponse } from 'src/interfaces/interfaces';
import { Tasks } from '@prisma/client';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<MyResponse<Tasks>> {
    const newTask = await this.taskService.create(createTaskDto);

    return {
      message: "Task was successfully created.",
      status: HttpStatus.CREATED,
      payload: newTask
    }
  }

  @Get()
  async findAll(): Promise<MyResponse<Tasks[]>> {
    const tasks: Tasks[] = await this.taskService.findAll();

    return {
      message: 'Tasks were returned with success!',
      status: HttpStatus.FOUND,
      payload: tasks
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch('order')
  async updatePresentationOrder(@Body('tasksIDs') tasksIDs: number[]): Promise<MyResponse<Tasks>> {
    await this.taskService.updatePresentationOrder(tasksIDs);

    return {
      message: `Tasks positions were successfully updated.`,
      status: HttpStatus.OK
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<MyResponse<Tasks>> {
    const updatedTask = await this.taskService.update(+id, updateTaskDto);

    return {
      message: `Task ${id} was successfully updated.`,
      status: HttpStatus.OK,
      payload: updatedTask
    };
  }

  

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.taskService.remove(+id);
    
    return {
      message: `Task ${id} was successfully removed.`,
      status: HttpStatus.OK
    };
  }
}
