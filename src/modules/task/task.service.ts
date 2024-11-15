import { ConflictException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'prisma/service/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prismaService: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = await this.prismaService.tasks.findUnique({where: {name: createTaskDto.name}});

    if(task) {
      throw new ConflictException('Task with this name already exists');
    }

    const position = await this.prismaService.tasks.count();

    const newTask = {
      ...createTaskDto,
      presentationOrder: position + 1
    }

    return this.prismaService.tasks.create({data: newTask});
  }

  async findAll() {
    return this.prismaService.tasks.findMany({orderBy: {presentationOrder: 'asc'}});
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.prismaService.tasks.findFirstOrThrow({where: {id: id}});
    
    if(updateTaskDto.name != task.name){
      const verifyTaskName = await this.prismaService.tasks.findUnique({where: {name: updateTaskDto.name}});
      
      if(verifyTaskName)  {
        throw new ConflictException('This name is already being used!')
      }
    }

    return this.prismaService.tasks.update({where: {id: task.id}, data: updateTaskDto})
  }

  async updatePresentationOrder(tasksIDs: number[]) {
    for(let newPosition=0 ; newPosition<tasksIDs.length ; newPosition++) {

      await this.prismaService.tasks.update({
        where: { id: tasksIDs[newPosition] },
        data: { presentationOrder: newPosition + 1 },
      });
      
    }
  }

  async remove(id: number) {
    return await this.prismaService.tasks.delete({where: {id: id}});
  }
}
