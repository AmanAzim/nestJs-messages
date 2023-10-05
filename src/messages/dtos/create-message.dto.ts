import { IsString } from 'class-validator';

class CreateMessageDto {
  @IsString()
  content: string;
}

export default CreateMessageDto;

// Validation pipe takes the incoming request body > transform it into an instance of the of CreateMessageDto Class using class-transformer package internally > validate using class-validator
