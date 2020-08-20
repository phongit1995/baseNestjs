import {IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export interface createUserDTO{

    username:string
    password:string
}
export class UserCreateDTO{
    @ApiProperty()
    @IsString()
    username:string;
    @ApiProperty()
    @IsString()
    password:string
}