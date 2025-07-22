export class Id{
  constructor(private readonly value: string) {
    if (value.length < 6 || value.length > 12) {
      throw new Error("Id must be between 6 and 12 characters long");
    }
  }
}