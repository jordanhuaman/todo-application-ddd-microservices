import { SingleStoreDriverDatabase } from "drizzle-orm/singlestore/driver";
import { TodoRepository } from "../domain/todo-repository";
import { Pool } from "mysql2/typings/mysql/lib/Pool";
import { data, todo, todoType, user } from "../../../db/user-schema";
import { NodePgClient, NodePgDatabase } from "drizzle-orm/node-postgres";

export class TodoRepositoryImpl {

  private readonly db: NodePgDatabase<Record<string, never>> & {
    $client: NodePgClient;
  };


  constructor(db: NodePgDatabase<Record<string, never>> & {
    $client: NodePgClient;
  }) {
    this.db = db;
  }

  async createTodo(todos: todoType): Promise<void> {
    await this.db.insert(todo).values(todos);
  }
}