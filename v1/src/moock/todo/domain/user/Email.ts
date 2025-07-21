export class Email{
  constructor(private readonly value: string){
    if(!value.includes("@")){
      throw new Error("Email must contain @.")
    }
  }
}