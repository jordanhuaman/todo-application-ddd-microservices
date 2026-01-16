import type { userDto } from "../domain/user";
import type { userRepository } from "../domain/user-repository";

export class GetById{
  constructor(private readonly userRepository: userRepository) {  }

  async execute(id: string): Promise<userDto | null> {
    return this.userRepository.getUserById(id);
  }
}