import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './models/task.model';
import { CreateTaskDto } from './dtos/create-task.dto';
import { FindTaskDto } from './dtos/find-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {

    }

    @Get('findAll')
    public findAll(): ITask[] {
        const response = this.tasksService.findAll();
        return response;
    }

    @Get('findOne')
    public findOne(@Query() params: FindTaskDto): ITask {
        const response = this.tasksService.findOne(params);
        if (response) {
            return response;
        }
        throw new NotFoundException(`Task with ID: ${params.taskId} not found.`);
    }

    @Post('create')
    public createTask(@Body() createTaskDto: CreateTaskDto): ITask {
        const response = this.tasksService.createTask(createTaskDto);
        return response;
    }

    @Patch('updateStatus')
    public updateStatus(@Query() params: FindTaskDto, @Body() updateTaskDto: UpdateTaskDto): ITask {
        const task = this.tasksService.findOne(params);
        if (task) {
            task.status = updateTaskDto.status;
            return task;
        }
        throw new NotFoundException(`Task with ID: ${params.taskId} not found.`);
    }
    
    @Delete('deleteOne')
    @HttpCode(HttpStatus.NO_CONTENT)
    public deleteOne(@Query() params: FindTaskDto): void {
        const task = this.tasksService.findOne(params);
        if (task) {
            this.tasksService.deleteTask(params.taskId);
        } else {
            throw new NotFoundException(`Task with ID: ${params.taskId} not found.`);
        }
    }
}
