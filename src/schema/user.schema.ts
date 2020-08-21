
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Schema as MongoSchema } from 'mongoose';
@Schema({autoCreate:true,collection:'user',timestamps:true,_id:true})
export class User extends Document{
  @Prop({
      type:String
  })
  username:string;
  @Prop({
    type:Number
  })
  password:number;
}
export const UserSchema = SchemaFactory.createForClass(User);