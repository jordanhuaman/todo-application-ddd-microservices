import type { userRepository } from "../domain/user-repository";
import type { userDto } from "../domain/user";
import type { EventBus } from "../domain/event-buss";
import UserEntity from "../domain/user-entity";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: userRepository,
    private readonly eventBuss: EventBus) { }

  async execute(data: { name: string; age: number; email: string }): Promise<string> {
    try {
      var entity = UserEntity.fromPrimitives(data.name, data.age, data.email);
      console.log(entity)
      const response = await this.userRepository.createUser(data.name, data.age, data.email);
      await this.eventBuss.publish({ type: "UserCreated", payload: data });
      return response;
    } catch (error) {
      console.error("Error in CreateUserUseCase:", error);
      throw error;
    }
  }
}