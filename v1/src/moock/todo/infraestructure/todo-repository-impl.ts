import { SingleStoreDriverDatabase } from "drizzle-orm/singlestore/driver";
import { TodoRepository } from "../domain/todo-repository";
import { Pool } from "mysql2/typings/mysql/lib/Pool";
import { todo, TODO_TYPE_DB, user } from "../../../db/user-schema";
import { NodePgClient, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Todo } from "../domain/todo/Todo";
import { SERVICE_CONTAINER } from "../../../shared/application/use-cases";
import { todo as TODODB } from "../../../db/user-schema";
import { db } from "../../..";


export class TodoRepositoryImpl implements TodoRepository {

  constructor() {}

  async createTodo(todo: Todo): Promise<void> {

    const todo2 = await db.insert(TODODB).values({
      id: todo.getTodoId(),
      title: todo.getTitle(),
      description: todo.getDescription(),
      user: todo.getUserId(),
    })
  }
}