import { ApiProperty } from '@nestjs/swagger';
import { Todo } from '@prisma/client';

export class TodoEntity implements Todo {
  @ApiProperty({
    example: 'sla5rsk8r0btp7328dxh9k1d',
    description: 'CUIDで生成されます',
  })
  id: string;

  @ApiProperty({ example: 'Buy milk' })
  title: string;

  @ApiProperty({ default: false })
  completed: boolean;

  @ApiProperty({ required: false, nullable: true })
  expiresAt: Date | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
