import type { userRepository } from "../domain/user-repository";

export class SaveUserWelcomePlatform {
  constructor(private readonly userRepository: userRepository) { }

  async execute(userId: string): Promise<void> {
    var user = await this.userRepository.getUserById(userId);
  }
}
