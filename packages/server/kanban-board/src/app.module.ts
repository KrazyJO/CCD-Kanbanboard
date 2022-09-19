import { Module } from '@nestjs/common';
import { CRUDHandler } from './Controller/CRUDHandler.controller';
import { WSHandler } from './Gateway/WSHandler.gateway';

@Module({
  imports: [],
  controllers: [CRUDHandler],
  providers: [WSHandler],
})
export class AppModule {}
