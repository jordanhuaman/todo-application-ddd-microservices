import type { userRepository } from "./user-repository";

export class UserController {
  constructor(readonly userRepository: userRepository) {}

  async getAllUsers() {
    return this.userRepository.getallUsers();
  }
}