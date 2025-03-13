import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { TaskStatus } from "../models/task.model";

export class CreateTaskDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsEnum(TaskStatus)
    @IsNotEmpty()
    status: TaskStatus;
}