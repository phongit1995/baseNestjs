import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";
import * as mongoose from 'mongoose';
@ValidatorConstraint({ async: false })
export class MongooseId implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments) {
        return mongoose.Types.ObjectId.isValid(text);
    }
 
    defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
        return "Not Found Mongoose Id";
    }
 
}