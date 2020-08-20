import { Injectable } from "@nestjs/common";
import * as memoryCache from 'memory-cache';
@Injectable()
export class CacheService{
    Cache:any =  new memoryCache.Cache();
    setCache(name:string,data:any,time:number=30000){
        return this.Cache.put(name,data,time);
    }
    getCache(name:string):any{
        return this.Cache.get(name);
    }
}