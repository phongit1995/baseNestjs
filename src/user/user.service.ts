import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';
import { Model } from 'mongoose';
import {createUserDTO} from './dto/user.dto';
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private UserModel:Model<User>
    ){}
    async getList():Promise<User[]>{
        return this.UserModel.find({});
    }
    async createUser(data:createUserDTO):Promise<User>{
        return this.UserModel.create({...data});
    }
    async getDetial(id:string):Promise<User>{
        return this.UserModel.findById(id);
    }
}
