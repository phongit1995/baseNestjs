import { Controller, Get, Post, Body ,UsePipes, Param} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDTO } from './dto/user.dto';
import { ApiResult } from 'src/common/api-result';
import {ValidationPipe} from './../common/validation.pipe';
import {ApiTags,ApiResponse} from '@nestjs/swagger';
@ApiTags("user")
@Controller('user')
export class UserController {
    constructor(private User:UserService){}
    @ApiResponse({ status: 201, description: 'List User'})
    @Get()
    async createNew(){
        let listUser=  await this.User.getList();
        return (new ApiResult().success(listUser));
    }
    @ApiResponse({ status: 201, description: 'create user successFully'})
    @Post("create")
    @UsePipes(new ValidationPipe())
    async create(@Body()body:UserCreateDTO){
        let user= await  this.User.createUser(body);
        return (new ApiResult().success(user));
    }
    @Get("detial/:id")
    async getDetial(@Param('id')id:string){
        let user = await this.User.getDetial(id);
        return (new ApiResult().success(user));
    }
}
