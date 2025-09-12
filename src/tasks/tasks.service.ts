import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
  id: number;
  title: string;
  description?: string;
  isDone: boolean;
  userId: number;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  create(createTaskDto: CreateTaskDto, userId: number): Task {
    const task: Task = {
      id: this.nextId++,
      ...createTaskDto,
      isDone: false,
      userId,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(userId: number): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  findOne(id: number, userId: number): Task {
    const task = this.tasks.find(
      (task) => task.id === id && task.userId === userId,
    );
    if (!task) {
      throw new NotFoundException('Tarefa não encontrada');
    }
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto, userId: number): Task {
    const task = this.findOne(id, userId);
    Object.assign(task, updateTaskDto);
    return task;
  }

  remove(id: number, userId: number): void {
    const index = this.tasks.findIndex(
      (task) => task.id === id && task.userId === userId,
    );
    if (index === -1) {
      throw new NotFoundException('Tarefa não encontrada');
    }
    this.tasks.splice(index, 1);
  }
}
