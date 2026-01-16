import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import type { userDto } from "../domain/user";
import type { userRepository } from "../domain/user-repository";
import type postgres from "postgres";
import { eq, type EmptyRelations } from "drizzle-orm";
import { usersTable } from "../../../shared/infraestructure/db/schema";
import { inputtoDomain, userEntityToDomain } from "../domain/use-mapper";
export class UserRepositoryImpl implements userRepository {

  db: PostgresJsDatabase<Record<string, never>, EmptyRelations> & { $client: postgres.Sql<{}> };
  constructor(db: PostgresJsDatabase<Record<string, never>, EmptyRelations> & { $client: postgres.Sql<{}> }) {
    this.db = db;
  }
  async getUserById(userId: string): Promise<userDto | null> {
    const data = await this.db.select().from(usersTable).where(eq(usersTable.id, userId)).limit(1);

    if (data.length === 0) {
      return null;
    }
    return userEntityToDomain(data[0] as typeof usersTable.$inferSelect);
  }

  async getallUsers(): Promise<userDto[]> {
    const data = await this.db.select().from(usersTable);
    return data.map((entity) => userEntityToDomain(entity));
  }
  async createUser(name: string, age: number, email: string): Promise<string> {
    const entity = inputtoDomain(name, age, email);
    const persisted = await this.db
      .insert(usersTable).values({ id: entity.id, name: entity.name, age: entity.age, email: entity.email }).returning();

    return persisted[0]?.id.toString() || "";
  }

}