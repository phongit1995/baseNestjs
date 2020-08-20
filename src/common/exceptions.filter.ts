import { Catch ,ArgumentsHost ,ExceptionFilter,HttpException} from "@nestjs/common";
import {Request,Response} from 'express';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter  {
    catch(exception:HttpException,host:ArgumentsHost){
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        try{
            const status = exception.getStatus();
            const message = exception.message ;
            response.status(status).json({
                statusCode:status,
                timestamp:new Date().toISOString(),
                path:request.url,
                message:message 
            })
        }catch{
            response.status(400).json({
                statusCode:400,
                timestamp:new Date().toISOString(),
                path:request.url,
                message:exception.stack
            })
        }
    }
}