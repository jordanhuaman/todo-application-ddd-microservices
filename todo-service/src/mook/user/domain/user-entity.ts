class UserEntity{
  private id:string;
  private name:string;
  private age:number;
  private email:string;
  private createAt:Date;
  private updateAt:Date | null;
  private status:string;
  private deleted:boolean;

  constructor(name: string, age: number, email: string,){
    this.id = null as unknown as string;
    this.name = name;
    this.age = age;
    this.email = email;
    this.createAt = null as unknown as Date;
    this.updateAt = null;
    this.status = "CREATED";
    this.deleted = false;
  }

  public static fromPrimitives(
    name:string,
    age:number,
    email:string,
  ):UserEntity | Error {
    const user = new UserEntity(name, age, email);
    return user;
  }
}

export  default UserEntity;