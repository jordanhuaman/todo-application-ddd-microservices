import { Todo } from "../domain/Todo";
import { TodoRepository } from "../domain/todo-repository";
import { v4 as uuidv4 } from 'uuid';
export class CreateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {

  }
  async execute(
    title: string,
    description: string,
    userId: string,
    date: string,
  ): Promise<void> {
    const id = uuidv4();
    const domainTodo = Todo.fromPrimitives(id, title, description, userId,date);
    await this.todoRepository.createTodo(domainTodo);
  }
}