export interface TodoRepository {
  createTodo(title: string, description: string): Promise<void>;
  getTodos(): Promise<Array<{ id: string; title: string; description: string }>>;
  updateTodo(id: string, title?: string, description?: string): Promise<void>;
  deleteTodo(id: string): Promise<void>;
}