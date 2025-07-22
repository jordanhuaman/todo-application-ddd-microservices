import { Todo } from "./Todo";
export interface TodoRepository {
  createTodo(todo: Todo): Promise<void>;
}