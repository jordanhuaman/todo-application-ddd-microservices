import { Todo } from "./todo/Todo";

export interface TodoRepository {
  createTodo(todo: Todo): Promise<void>;
}