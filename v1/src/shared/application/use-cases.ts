import { db } from "../..";
import { CreateTodoUseCase } from "../../moock/todo/application/create-todo-use-case";
import { TodoRepositoryImpl } from "../../moock/todo/infraestructure/todo-repository-impl";



const implementation = new TodoRepositoryImpl();

export const SERVICE_CONTAINER = {
  todo: {
    create: (
      title: string,
      description: string,
      userId: string) => new CreateTodoUseCase(implementation).execute(title, description, userId)
  }
}