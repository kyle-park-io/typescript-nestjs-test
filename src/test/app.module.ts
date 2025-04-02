import { Module } from '@nestjs/common';
import { AModule } from './modules/a/a.module';
import { BModule } from './modules/b/b.module';
import { CModule } from './modules/c/c.module';

@Module({
  imports: [AModule, BModule, CModule],
})
export class AppModule {}
