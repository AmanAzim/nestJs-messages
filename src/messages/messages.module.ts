import { Module } from '@nestjs/common';

import { MessagesController } from './messages.controller';
import MessagesService from './messages.service';
import MessagesRepository from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesService], // Classes that are used in dependency injection
})
export class MessagesModule {}
