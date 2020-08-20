import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/exceptions.filter';
import { UploadModule } from './upload/upload.module';
@Module({
  imports: [
    
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [{
    provide:APP_FILTER,
    useClass:AllExceptionsFilter
  },AppService],
})
export class AppModule {}
