import { relations } from "drizzle-orm";
import { date, integer, pgSchema, real, time, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const userSchema = pgSchema("user-management");
export const eventSchema = pgSchema("event-source");

export const user = userSchema.table("users", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  gender: varchar({ length: 10 }).notNull()
});

export const todo = userSchema.table("todo", {
  id: uuid().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 500 }).notNull(),
  user: uuid("user_id").notNull(),
  date: date().notNull(),
  time: time().notNull(),
  state: varchar({ length: 20 }).notNull().default("SCHEDULED"),
  completePercentage: real().notNull().default(0.0),
  createAt: timestamp().defaultNow(),
  updateAt: timestamp(),
})

export const todoGroup = userSchema.table("todo_group", {
  id: uuid().primaryKey(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 500 }).notNull(),
  userId: uuid("user_id").notNull(),
  createAt: timestamp().defaultNow(),
  updateAt: timestamp()
})

export const groupMember = userSchema.table("group_member", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  groupId: uuid("group_id").notNull(),
  memberId: varchar({ length: 255 }).notNull(),
  memberInvitationStatus: varchar({ length: 20 }).notNull().default("PENDING"),
  role: varchar({ length: 20 }).notNull().default("MEMBER"),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp()
})

export const historyNote = userSchema.table("history_note",{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  todoId: uuid("todo_id").notNull(),
  initialState: varchar({ length: 20 }).notNull(),
  finalState: varchar({ length: 20 }).notNull(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
  userId: uuid("user_id").notNull(),
})


export const userRelations = relations(user, ({ many }) => ({
  todos: many(todo, { relationName: "userTodos" }),
  todoGroup: many(todoGroup, { relationName: "userTodoGroups" }),
  todoHistory: many(historyNote, { relationName: "userTodoHistory" }),
}));

export const todoGroupRelations = relations(todoGroup, ({ many }) => ({
  groupMembers: many(groupMember, { relationName: "todoGroupMembers" }),
}))


export type USER_TYPE_DB = typeof user.$inferSelect;
export type TODO_TYPE_DB = typeof todo.$inferSelect;
export type TODO_GROUP_TYPE_DB = typeof todoGroup.$inferSelect;
export type GROUP_MEMBER_TYPE_DB = typeof groupMember.$inferSelect;
export type HISTORY_NOTE_TYPE_DB = typeof historyNote.$inferSelect;