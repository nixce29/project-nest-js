import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ){}

  create(createTodoDto: CreateTodoDto) {
// INSERT INTO todo ('title','username','status') value ('ทดสอบ','ทดสอบ','สำเร็จ')
    return this.todoRepository.save(createTodoDto);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOneBy({
        id:id
    });
  }

  update(id: number, updateTodoDto: any) {
    return this.todoRepository.save({
        id:id,
        title:updateTodoDto.title,
        username:updateTodoDto.username,
        status:updateTodoDto.status,
    });
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
