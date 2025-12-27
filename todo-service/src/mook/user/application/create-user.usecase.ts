import type { userRepository } from "../infraestructure/user-repository";
import type { userDto } from "../domain/user";

export class CreateUserUseCase {
  constructor(private readonly userRepository: userRepository) {}

  async execute(data: { name: string; age: number; email: string }): Promise<string> {
    return this.userRepository.createUser(data.name, data.age, data.email);
  }
}