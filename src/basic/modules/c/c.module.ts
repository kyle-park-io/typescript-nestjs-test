import { Module } from '@nestjs/common';
import { CService } from './c.service';
import { AModule } from '../a/a.module';

@Module({
  imports: [AModule],
  providers: [CService],
  //   exports: [AService],
})
export class CModule {}
