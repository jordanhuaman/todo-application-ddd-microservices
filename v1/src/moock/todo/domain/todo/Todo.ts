import { TodoCreateAt } from "./TodoCreateAt";
import { TodoId } from "./TodoId";
import { TodoUpdateAt } from "./TodoUpdateAt";

export class Todo {
  private readonly todoId: TodoId;
  private todoCreateAt: TodoCreateAt;
  private todoUpdateAt: TodoUpdateAt;
  private title: string;
  private description: string;
  private userId: string;
  constructor(
    todoId: TodoId,
    title: string,
    description: string,
    userId: string,
    todoCreateAt?: TodoCreateAt,
    todoUpdateAt?: TodoUpdateAt,
  ) {
    this.todoId = todoId;
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.todoCreateAt = todoCreateAt || new TodoCreateAt(new Date().toISOString());
    this.todoUpdateAt = todoUpdateAt || new TodoUpdateAt(new Date().toISOString());
  }

  public static fromPrimitives(id: string, title:string, description: string, userId: string){
    const todo = new Todo(
      new TodoId(id),
      title,
      description,
      userId
    )

    return todo;
  }

  getTodoId(): string {
    return this.todoId.getValue();
  }

  getTodoCreateAt(): TodoCreateAt {
    return this.todoCreateAt;
  }

  getTodoUpdateAt(): TodoUpdateAt {
    return this.todoUpdateAt;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }
  
  getUserId(): string {
    return this.userId;
  }
}