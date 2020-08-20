import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
export const multerConfig={
    dest: './upload',
}
export const multerOptions = {
    limits: {
      fileSize: 1048576,
    },
    storage: diskStorage({
      destination: (req: any, file: any, cb: any) => {
        const uploadPath = multerConfig.dest;
        // Create folder if doesn't exist
        if (!existsSync(uploadPath)) {
          mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
      },
      filename: (req: any, file: any, cb: any) => {
        cb(null, `${uuid()}${extname(file.originalname)}`);
      },
    }),
  };
  