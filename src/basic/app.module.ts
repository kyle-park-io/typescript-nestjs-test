import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AModule } from './modules/a/a.module';
import { BModule } from './modules/b/b.module';
import { CModule } from './modules/c/c.module';
import { BService } from './modules/b/b.service';

@Module({
  imports: [AModule, BModule, CModule],
  providers: [AppService],
})
export class AppModule {}
