import type { userDto } from "../domain/user";

export interface userRepository{
  getallUsers(): Promise<userDto[]>;
  createUser(name: string, age: number, email: string): Promise<string>;
}