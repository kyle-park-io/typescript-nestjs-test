import { Injectable, type OnModuleInit } from '@nestjs/common';

@Injectable()
export class BService implements OnModuleInit {
  onModuleInit(): void {
    console.log('init B');
  }

  //   async onModuleInit(): Promise<void> {
  //     console.log('init B');
  //   }
}
