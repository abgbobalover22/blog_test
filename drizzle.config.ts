import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts", // Path to your schema
  out: "./drizzle", // Where migrations will be stored
  dialect: "sqlite", // Turso uses the SQLite dialect
  dbCredentials: {
    url: process.env.TURSO_URL!,
    authToken: process.env.TURSO_TOKEN!,
  },
});
