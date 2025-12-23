import { boolean, integer, pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { defineRelations } from "drizzle-orm";

export const userStatusEnum = pgEnum("status", ["CREATED", "DELETED", "BANNED"]);

export const usersTable = pgTable("users", {
  id: uuid().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updateAt: timestamp({ withTimezone: true }),
  status: userStatusEnum().default("CREATED").notNull(),
  deleted: boolean().default(false).notNull(),

});

export type userTypeSchema = typeof usersTable.$inferInsert;

export const profileTable = pgTable("profile", {
  id: integer().primaryKey(),
  imageUrl: varchar({ length: 512 }),
  createAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updateAt: timestamp({ withTimezone: true }),
  userId: uuid("user_id").notNull().unique().references(() => usersTable.id),
})

export const userSharedInformation = pgTable("user_shared_information", {
  id: integer().primaryKey(),
  info: varchar({ length: 1024 }).notNull(),
  country: integer(),
  description: varchar({ length: 2048 }),
  userId: uuid("user_id").notNull().unique().references(() => usersTable.id),
  createAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updateAt: timestamp({ withTimezone: true }),
})

export const favoriteCollaborators = pgTable("favorite_collaborators", {
  id: integer().primaryKey(),
  userId: uuid("user_id").notNull().references(() => usersTable.id),
  colaboratorId: uuid("collaborator_id").notNull().unique().references(() => usersTable.id),
  createAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updateAt: timestamp({ withTimezone: true }),
}
)


const relations = defineRelations({ usersTable, profileTable, userSharedInformation, favoriteCollaborators }, (r) => ({
  profileTable: {
    user: r.one.usersTable({
      from: r.profileTable.userId,
      to: r.usersTable.id,
    }),
  },
  userSharedInformation: {
    user: r.one.usersTable({
      from: r.userSharedInformation.userId,
      to: r.usersTable.id,
    })
  },
  favoriteCollaborators: {
    user: r.one.usersTable({
      from: r.favoriteCollaborators.userId,
      to: r.usersTable.id,
    })
  },
  usersTable: {
    collaborators: r.many.favoriteCollaborators()
  }
}))