import type { userRepository } from "./user-repository";

export class UserController {
  constructor(readonly userRepository: userRepository) { }

  async getAllUsers() {
    return this.userRepository.getallUsers();
  }
  async createUser(data: { name: string; age: number; email: string }): Promise<string> {
    const persisted = await this.userRepository.createUser(data.name, data.age, data.email);
    return persisted
  }
}