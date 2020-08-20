import { DynamicModule, Module } from '@nestjs/common';
import {CacheService} from './cache.service';
@Module({})
export class CacheModule {
  static register(): DynamicModule {
    return {
      module: CacheModule,
      providers: [CacheService],
      exports: [CacheService],
    };
  }
}