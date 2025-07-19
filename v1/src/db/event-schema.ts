import { integer, pgSchema, timestamp, varchar } from "drizzle-orm/pg-core";

const eventSchema = pgSchema("event-source");

export const evenTable = eventSchema.table("events", {
  id: varchar().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().defaultNow(),
  updateAt: timestamp()
}
);