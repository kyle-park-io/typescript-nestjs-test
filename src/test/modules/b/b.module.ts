import { Module } from '@nestjs/common';
import { BService } from './b.service';
import { AModule } from '../a/a.module';

@Module({
  imports: [AModule],
  providers: [BService],
  //   exports: [AService],
})
export class BModule {}
