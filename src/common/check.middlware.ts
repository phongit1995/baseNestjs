import { Request, Response } from 'express';
export function CheckRequest(req: Request, res: Response, next: Function) {
    let {authorization,Authorization} = req.headers ;
    let token = authorization || Authorization ;
    let {url} =req;
    if(url.includes("/docs")){
        return  next();
    }
    next()
  };
