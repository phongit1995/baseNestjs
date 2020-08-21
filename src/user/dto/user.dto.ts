import {IsString,Validate} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MongooseId } from 'src/common/validation/mongooseId.validation';
import * as mongoose from 'mongoose';
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
export class UserUpdateDto{
    @ApiProperty()
    @Validate(MongooseId)
    id:string;
    @ApiProperty()
    @IsString()
    username:string;
}