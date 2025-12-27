import type { userRepository } from "../infraestructure/user-repository";
import type { userDto } from "../domain/user";
import type { EventBus } from "../../../shared/infraestructure/event-buss/event-buss";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: userRepository,
    private readonly eventBuss: EventBus) { }

  async execute(data: { name: string; age: number; email: string }): Promise<string> {
    const response = await this.userRepository.createUser(data.name, data.age, data.email);
    await this.eventBuss.publish({ type: "UserCreated", payload:data });
    return response;
  }
}