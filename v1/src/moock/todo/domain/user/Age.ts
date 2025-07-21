export class Age {
  constructor(private readonly value: number) {
    if (value < 18 || value > 120) {
      throw new Error("Age must be between 0 and 120");
    }
  }
  public get():number{
    return this.value;
  }
}