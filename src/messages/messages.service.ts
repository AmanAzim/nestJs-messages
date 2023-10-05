import { Injectable } from '@nestjs/common';

import MessagesRepository from './messages.repository';

@Injectable() // this makes this class a injectable dependency
class MessagesService {
  // messagesRepo: MessagesRepository;
  // constructor(messagesRepo: MessagesRepository) {
  //   this.messagesRepo = messagesRepo;
  // }

  // TypeScript shortcut
  constructor(public messagesRepo: MessagesRepository) {}

  public async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}

export default MessagesService;
