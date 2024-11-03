import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty({ required: false })
  completed?: boolean;

  @ApiProperty({ required: false })
  expiresAt?: Date;
}
