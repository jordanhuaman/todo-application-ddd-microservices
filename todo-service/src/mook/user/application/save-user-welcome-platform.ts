import type { userRepository } from "../domain/user-repository";

export class SaveUserWelcomePlatform {
  constructor(private readonly userRepository: userRepository) { }

  async execute(userId: string): Promise<void> {
    var user = await this.userRepository.getUserById(userId);
    if(user){
      console.log("Welcome platform saved for user:", user.name);
    }
    else {
      console.log("User not found with ID:", userId);
    }
  }
}