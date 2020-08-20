
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({autoCreate:true,collection:'user',timestamps:true,_id:true})
export class User extends Document{
  @Prop({
      type:String
  })
  username:string;
  @Prop({
      type:String
  })
  password:number;
}
export const UserSchema = SchemaFactory.createForClass(User);