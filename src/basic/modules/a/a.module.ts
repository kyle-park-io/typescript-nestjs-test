import { Module } from '@nestjs/common';
import { AService } from './a.service';

@Module({
  providers: [AService],
  //   exports: [AService],
})
export class AModule {}
