import { Injectable, type OnModuleInit } from '@nestjs/common';

@Injectable()
export class CService implements OnModuleInit {
  onModuleInit(): void {
    console.log('init C');
  }

  //   async onModuleInit(): Promise<void> {
  //     console.log('init C');
  //   }
}
