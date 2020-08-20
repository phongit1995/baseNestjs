import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/user.schema';
import { CacheService } from 'src/common/cache/cache.service';
import {CacheModule} from './../common/cache/cache.module';
@Module({
  imports:[
    MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
    CacheModule
  ],
  providers: [UserService,CacheService],
  controllers: [UserController]
})
export class UserModule {}
