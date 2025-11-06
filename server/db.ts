import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";

// Update the import path if your schema file is located elsewhere, for example:

import { pgTable, serial, text, varchar, timestamp, numeric, integer } from "drizzle-orm/pg-core";
// Or create the schema.ts file in the ../models/ directory if it does not exist.
// create this file at: ../models/schemas.ts

// Example table(s) — adjust fields to match your app
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  quantity: integer("quantity").default(0),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});

// Export additional tables here as needed
// export const posts = pgTable("posts", { ... })

// The db.ts file imports the module as `import * as schema from "../models/schemas";`
// so exporting the tables as named exports (like `users`) is sufficient.


neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool, { schema: { products } });
