import { IsEnum, IsNotEmpty } from "class-validator";
import { TaskStatus } from "../models/task.model";

export class UpdateTaskDto {
    @IsNotEmpty()
    @IsEnum(TaskStatus)
    status: TaskStatus;
}