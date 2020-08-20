import { Controller, Post ,UseInterceptors,UploadedFile} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {FileInterceptor}from '@nestjs/platform-express';
import { multerOptions } from 'src/config/multer.config';
@ApiTags("Upload")
@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('file',multerOptions))
    uploadFile(@UploadedFile() file){
        console.log(file);
        return file ;
    }
}
