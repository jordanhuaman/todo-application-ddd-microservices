import { DateTime } from "./DateTime";
import { TodoCreateAt } from "./TodoCreateAt";
import { UUID } from "../../shared/domain/UUID";
import { TodoUpdateAt } from "./TodoUpdateAt";
import { TODO_STATUS } from "../../shared/domain/Todo.types";

export class Todo {
  private readonly todoId: UUID;
  private todoCreateAt: TodoCreateAt;
  private todoUpdateAt: TodoUpdateAt;
  private title: string;
  private description: string;
  private userId: string;
  private date: DateTime;
  private status: TODO_STATUS;
  private completePercentage:number ;

  constructor(
    todoId: UUID,
    title: string,
    description: string,
    userId: string,
    date: DateTime,
    status: string,
    completePercentage: number,
    todoCreateAt?: TodoCreateAt,
    todoUpdateAt?: TodoUpdateAt
    ) {
    this.todoId = todoId;
    this.title = title;
    this.description = description;
    this.userId = userId;
    this.todoCreateAt = todoCreateAt || new TodoCreateAt(new Date().toISOString());
    this.todoUpdateAt = todoUpdateAt || new TodoUpdateAt(new Date().toISOString());
    this.date = date;
    this.status = status as TODO_STATUS;
    this.completePercentage = completePercentage || 0;
  }

  public static fromPrimitives(
    id: string, 
    title:string, 
    description: string, 
    userId: string,
    date: string){
    const todo = new Todo(
      new UUID(id),
      title,
      description,
      userId,
      new DateTime(date),
      TODO_STATUS.SCHEDULED,
      0 
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

  getDate(): DateTime {
    return this.date;
  }

  getStatus(): TODO_STATUS {
    return this.status;
  }

  getCompletePercentage(): number {
    return this.completePercentage;
  }

}