import type { userRepository } from "./user-repository";
import { tryCatch as customTryCatch } from "../../../shared/domain/custm_try-catch";
export class UserController {
  constructor(readonly userRepository: userRepository) { }

  async getAllUsers() {
    return this.userRepository.getallUsers();
  }
  async createUser(data: { name: string; age: number; email: string }): Promise<string> {
    const {data: result , error} = await customTryCatch(this.userRepository.createUser(data.name, data.age, data.email));

    if (error){
      throw new Error(`Error creating user`);
    }
    return result;
  }
}