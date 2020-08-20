import { PipeTransform, Injectable, ArgumentMetadata,BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
      console.log(value);
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {    
      throw new HttpException(`Validation Failed: ${this.formatErrors(errors)}`,HttpStatus.BAD_REQUEST);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
  private formatErrors(errors:ValidationError[]):string{
      return errors.map((err)=>{
        for(let property in err.constraints){
            return err.constraints[property];
        }
      }).join(" , ")
  }
}