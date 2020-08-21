import { Controller, Post ,UseInterceptors,UploadedFile, Get ,Response, Param, HttpException, HttpStatus} from '@nestjs/common';
import {ApiTags ,ApiResponse} from '@nestjs/swagger';
import {FileInterceptor}from '@nestjs/platform-express';
import { multerOptions } from 'src/config/multer.config';
import {exists,createReadStream} from 'fs';
import * as path from 'path';
import { ApiResult } from 'src/common/api-result';
import {FileDTO} from './upload.dto';
@ApiTags("Upload File")
@Controller('upload')
export class UploadController {
    @Post()
    @ApiResponse({ status: 201, description: 'List User'})
    @UseInterceptors(FileInterceptor('file',multerOptions))
    uploadFile(@UploadedFile() file:FileDTO){
        return (new ApiResult().success(file.filename)); ;
    }
    @Get(":name")
     getFile(@Response() res,@Param('name')name:string){
        exists(path.join(__dirname,'./../../upload',name),(file)=>{
            if(file){
                createReadStream(path.join(__dirname,'./../../upload',name)).pipe(res);
            }
            else{
                return res.json((new ApiResult().error("File Not Found"))); 
            }
        })
    }
}
