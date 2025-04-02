import { Module } from '@nestjs/common';
import { CService } from './c.service';
import { BModule } from '../b/b.module';

@Module({
  imports: [BModule],
  providers: [CService],
  //   exports: [AService],
})
export class CModule {}
