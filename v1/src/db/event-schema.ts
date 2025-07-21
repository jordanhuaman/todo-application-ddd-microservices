import { integer, pgSchema, timestamp, varchar } from "drizzle-orm/pg-core";
import { eventSchema } from "./user-schema";


export const evenTable = eventSchema.table("events", {
  id: varchar().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().defaultNow(),
  updateAt: timestamp()
}
);