import { relations } from "drizzle-orm";
import { integer, pgSchema, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const userSchema = pgSchema("user-management");

export const data = pgTable("data", {
  id: integer().primaryKey().generatedAlwaysAsIdentity()})

export const user = userSchema.table("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  gender: varchar({ length: 10 }).notNull()
});
export const userRelatiosn = relations(user, ({ many }) => ({
  todos: many(todo, { relationName: "userTodos" })
}));

export const todo = userSchema.table("todo", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 500 }).notNull(),
  user: integer("user_id"),
  createAt: timestamp().defaultNow(),
  updateAt: timestamp(),
})

export type todoType = typeof todo.$inferSelect;

export const todoRelations = relations(todo, ({ one }) => ({
  user: one(user, {
    fields: [todo.user],
    references: [user.id]
  })
}));