import { Injectable, type OnModuleInit } from '@nestjs/common';

@Injectable()
export class AService implements OnModuleInit {
  onModuleInit(): void {
    console.log('init A');
  }

  //   async onModuleInit(): Promise<void> {
  //     console.log('init A');
  //   }
}
