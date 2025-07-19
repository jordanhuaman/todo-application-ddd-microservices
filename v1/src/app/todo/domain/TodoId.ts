export class TodoId {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  equals(other: TodoId): boolean {
    return this.value === other.value;
  }

  public validate(): boolean {
    return this.value.length > 6 && this.value.length < 12;
  }
  public static fromPrimitives(value: string): TodoId {
    return new TodoId(value);
  }
}