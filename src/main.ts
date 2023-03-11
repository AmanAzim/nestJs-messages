import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
//npx @nestjs/cli new project
//npx @nestjs/cli generate module messages
//npx @nestjs/cli generate controller <folder-name>/<controller-name> --flat
