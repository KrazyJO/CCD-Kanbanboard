import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CRUDHandler } from './CRUDHandler.controller';
import { WSHandler } from './WSHandler.gateway';

@Module({
  imports: [],
  controllers: [AppController, CRUDHandler],
  providers: [AppService, WSHandler],
})
export class AppModule {}
