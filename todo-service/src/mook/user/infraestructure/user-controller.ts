import { GetAllUsersUseCase } from "../application/get-all-users.usecase";
import { CreateUserUseCase } from "../application/create-user.usecase";
import { tryCatch as customTryCatch } from "../../../shared/domain/custom_try-catch";
import type { userRepository } from "../domain/user-repository";

export class UserController {
  private getAllUsersUseCase: GetAllUsersUseCase;
  private createUserUseCase: CreateUserUseCase;

  constructor(
    readonly userRepository: userRepository,
    readonly eventBuss: any) {
    this.getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
    this.createUserUseCase = new CreateUserUseCase(userRepository, eventBuss);
  }

  async getAllUsers() {
    return this.getAllUsersUseCase.execute();
  }

  async getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }

  async createUser(data: { name: string; age: number; email: string }): Promise<string> {
    const { data: result, error } = await customTryCatch(this.createUserUseCase.execute(data));
    if (error) {
      throw new Error(`Error creating user`);
    }
    return result;
  }
}