export class UUID {
  private readonly value: string;

  constructor(value: string) {
    if (value == null || typeof value !== 'string') {
      throw new Error("TodoId must be between 6 and 12 characters long.");
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}