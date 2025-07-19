export class TodoUpdateAt {
  private readonly todoUpdateAt: string;

  constructor(todoUpdateAt: string) {
    this.todoUpdateAt = todoUpdateAt;
  }

  getTodoUpdateAt(): string {
    return this.todoUpdateAt;
  }

  public static fromPrimitives(value: string): TodoUpdateAt {
    return new TodoUpdateAt(value);
  }
}