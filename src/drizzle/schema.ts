import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const EnumRole = pgEnum("userRole", ["ADMIN", "BASIC"]);
const createdAt = timestamp("created_at").notNull().defaultNow();
const updatedAt = timestamp("updated_at")
  .defaultNow()
  .$onUpdate(() => new Date());

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull(),
  name: varchar("name", { length: 100 }),
  role: EnumRole("role").default("BASIC"),
  createdAt,
  updatedAt,
});
