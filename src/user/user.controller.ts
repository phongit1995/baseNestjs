import { Controller, Get, Post, Body ,UsePipes, Param ,ParseBoolPipe} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDTO, UserUpdateDto } from './dto/user.dto';
import { ApiResult } from 'src/common/api-result';
import {ValidationPipe} from './../common/validation.pipe';
import {ApiTags,ApiResponse ,ApiOperation,ApiHeader} from '@nestjs/swagger';
import { CacheService } from 'src/common/cache/cache.service';
import { MongooseIdPipe} from 'src/common/validation/mongooseId.validation';
@ApiTags("user")
@Controller('user')
export class UserController {
    constructor(private User:UserService,private Cache:CacheService){}
    @ApiResponse({ status: 201, description: 'List User'})
    @Get()
    async createNew(){
        
        let data = this.Cache.getCache("user");
        if(data){
            return (new ApiResult().success(data));
        }
        let listUser=  await this.User.getList();
        this.Cache.setCache("user",listUser);
        return (new ApiResult().success(listUser));
    }

    @ApiResponse({ status: 201, description: 'create user successFully'})
    @ApiOperation({ summary: 'Create New User'})
    @Post("create")
    @UsePipes(new ValidationPipe())
    async create(@Body()body:UserCreateDTO){
        let user= await  this.User.createUser(body);
        return (new ApiResult().success(user));
    }
    @Get("detial/:id")
    @ApiOperation({ summary: 'Get Detial User',})
    async getDetial(@Param('id',MongooseIdPipe)id:string){
        let user = await this.User.getDetial(id);
        return (new ApiResult().success(user));
    }
    @ApiResponse({ status: 201, description: 'Update Success Full'})
    @Post("update")
    @UsePipes(new ValidationPipe())
    updateUser(@Body() body:UserUpdateDto){
        console.log(body);
    }
}
