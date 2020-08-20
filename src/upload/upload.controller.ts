import { Controller, Post ,UseInterceptors,UploadedFile, Get ,Response, Param} from '@nestjs/common';
import {ApiTags ,ApiResponse} from '@nestjs/swagger';
import {FileInterceptor}from '@nestjs/platform-express';
import { multerOptions } from 'src/config/multer.config';
import {exists,createReadStream} from 'fs';
import * as path from 'path';
import { exit } from 'process';
@ApiTags("Upload File")
@Controller('upload')
export class UploadController {
    @Post()
    @ApiResponse({ status: 201, description: 'List User'})
    @UseInterceptors(FileInterceptor('file',multerOptions))
    uploadFile(@UploadedFile() file){
        console.log(file);
        return file ;
    }
    @Get(":name")
    async getFile(@Response() res,@Param('name')name:string){
        exists(path.join(__dirname,'./../../upload',name),(file)=>{
            if(file){
                createReadStream(path.join(__dirname,'./../../upload',name)).pipe(res);
            }
        })
    }
}
