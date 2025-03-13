import { Injectable } from '@nestjs/common';
import { ITask } from './models/task.model';
import { CreateTaskDto } from './dtos/create-task.dto';
import { randomUUID } from 'crypto';
import { FindTaskDto } from './dtos/find-task.dto';

@Injectable()
export class TasksService {


    private tasks: ITask[] = [];

    findAll(): ITask[] {
        return this.tasks;
    }

    findOne(findTaskDto: FindTaskDto): ITask | undefined {
        return this.tasks.find(task => task.id === findTaskDto.taskId);
    }

    createTask(createTaskDto: CreateTaskDto): ITask {
        const task: ITask = {
            id: randomUUID(),
            ...createTaskDto
        }
        this.tasks.push(task);
        return task;
    }

    deleteTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id!== taskId);
    }
}
