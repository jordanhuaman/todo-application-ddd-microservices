import { integer, pgSchema, pgTable, varchar } from "drizzle-orm/pg-core";

const userSchema = pgSchema("user-management");

export const usersTable = userSchema.table("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  gender: varchar({ length: 10 }).notNull()
}
);
