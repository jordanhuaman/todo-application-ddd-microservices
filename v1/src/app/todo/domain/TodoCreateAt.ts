export class TodoCreateAt{
  private readonly createAt: string;

  constructor(createAt: string) {
    var date = Date.now().toLocaleString();
    this.createAt = createAt;
  }

  getCreateAt(): string {
    return this.createAt;
  }

  public static fromPrimitives(value: string): TodoCreateAt {
    return new TodoCreateAt(value);
  }
}