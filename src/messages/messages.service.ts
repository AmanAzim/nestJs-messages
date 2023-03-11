import MessagesRepository from './messages.repository';

class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // This is a class creating its own dependency which we DO NOT do either NEst use dependency injection like symfony in real apps
    this.messagesRepo = new MessagesRepository();
  }

  async findOne(id: string) {
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
