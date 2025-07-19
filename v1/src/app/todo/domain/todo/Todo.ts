import { TodoCreateAt } from "./TodoCreateAt";
import { TodoId } from "./TodoId";
import { TodoUpdateAt } from "./TodoUpdateAt";

export class Todo {
  private readonly todoId: TodoId;
  private readonly  todoCreateAt : TodoCreateAt;
  private todoUpdateAt: TodoUpdateAt;
  private title: string;
  private description: string;

  constructor(
    todoId: TodoId,
    todoCreateAt: TodoCreateAt,
    todoUpdateAt: TodoUpdateAt,
    title: string,
    description: string
  ) {
    this.todoId = todoId;
    this.todoCreateAt = todoCreateAt;
    this.todoUpdateAt = todoUpdateAt;
    this.title = title;
    this.description = description;
  }
}