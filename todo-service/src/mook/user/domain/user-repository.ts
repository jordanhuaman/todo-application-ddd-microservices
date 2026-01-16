import type { userDto } from "./user";

export interface userRepository{
  getallUsers(): Promise<userDto[]>;
  createUser(name: string, age: number, email: string): Promise<string>;
  getUserById(userId: string): Promise<userDto | null>;
}