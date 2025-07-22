export class Name{
  constructor(private readonly value: string){
    if(value.length >10 || value.length<3 ){
      throw new Error("Age must be between 0 and 120");
    }
  };
  public get():string{
    return this.value;
  }
}