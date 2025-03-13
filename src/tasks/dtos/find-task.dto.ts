import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class FindTaskDto {
    
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    taskId: string;
}