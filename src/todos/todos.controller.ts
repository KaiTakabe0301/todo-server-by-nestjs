import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { TodoEntity } from 'src/todos/entities/todo.entity';

@Controller('todos')
@ApiTags('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: TodoEntity,
  })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  @ApiOkResponse({ type: TodoEntity, isArray: true })
  @ApiQuery({ name: 'completed', required: false, type: Boolean })
  findAll(@Query('completed') completed?: string) {
    if (completed === undefined) {
      return this.todosService.findAll();
    }
    const isCompleted = completed === 'true' ? true : false;
    return this.todosService.findAll(isCompleted);
  }

  @Get(':id')
  @ApiOkResponse({ type: TodoEntity })
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TodoEntity })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TodoEntity })
  remove(@Param('id') id: string) {
    return this.todosService.remove(id);
  }
}
