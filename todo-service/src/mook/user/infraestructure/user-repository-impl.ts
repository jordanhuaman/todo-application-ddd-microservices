import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import type { userDto } from "../domain/user";
import type { userRepository } from "./user-repository";
import type postgres from "postgres";
import type { EmptyRelations } from "drizzle-orm";
import { usersTable } from "../../../shared/infraestructure/db/schema";
import { userEntityToDomain } from "../domain/use-mapper";

export class UserRepositoryImpl implements userRepository {

  db: PostgresJsDatabase<Record<string, never>, EmptyRelations> & { $client: postgres.Sql<{}> };
  constructor(db:   PostgresJsDatabase<Record<string, never>, EmptyRelations> & {$client: postgres.Sql<{}>}){
    this.db = db;
  }

  async getallUsers(): Promise<userDto[]> {
    const data= await  this.db.select().from(usersTable);
    return data.map((entity) => userEntityToDomain(entity));
  }
  createUser(name: string, age: number, email: string): Promise<userDto> {
    throw new Error("Method not implemented.");
  }

}