import { Name } from "drizzle-orm";
import { Age } from "./Age";
import { Email } from "./Email";
import { Gender } from "./Gender";
import { Id } from "./Id";

export class User {

  private readonly id: Id;
  private name: Name;
  private age: Age;
  private email: Email;
  private gender: Gender;

  constructor(
    id: Id,
    name: string,
    age: number,
    email: string,
    gender: string) {

    this.id = id;
    this.name = new Name(name);
    this.age = new Age(age);
    this.email = new Email(email);
    this.gender = new Gender(gender);
  }
  getId(): Id {
    return this.id;
  }

  getName(): Name {
    return this.name;
  }

  getAge(): Age {
    return this.age;
  }

  getEmail(): Email {
    return this.email;
  }

  getGender(): Gender {
    return this.gender;
  }
}