import type { userRepository } from "../domain/user-repository";
import type { userDto } from "../domain/user";

export class GetAllUsersUseCase {
  constructor(private readonly userRepository: userRepository) {}

  async execute(): Promise<userDto[]> {
    return this.userRepository.getallUsers();
  }
}