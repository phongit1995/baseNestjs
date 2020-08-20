import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/exceptions.filter';
@Module({
  imports: [
    
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
  ],
  controllers: [AppController],
  providers: [{
    provide:APP_FILTER,
    useClass:AllExceptionsFilter
  },AppService],
})
export class AppModule {}
