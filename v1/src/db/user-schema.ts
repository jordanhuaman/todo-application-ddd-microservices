import { relations } from "drizzle-orm";
import { integer, pgSchema, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

const userSchema = pgSchema("user-management");

export const user = userSchema.table("users", {
  id:  uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  gender: varchar({ length: 10 }).notNull()
});
export const userRelatiosn = relations(user, ({ many }) => ({
  todos: many(todo, { relationName: "userTodos" })
}));

export type USER_TYPE_DB = typeof user.$inferSelect;

export const todo = userSchema.table("todo", {
  id: uuid().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 500 }).notNull(),
  user: uuid("user_id"),
  createAt: timestamp().defaultNow(),
  updateAt: timestamp(),
})

export type TODO_TYPE_DB = typeof todo.$inferSelect;

export const todoRelations = relations(todo, ({ one }) => ({
  user: one(user, {
    fields: [todo.user],
    references: [user.id]
  })
}));