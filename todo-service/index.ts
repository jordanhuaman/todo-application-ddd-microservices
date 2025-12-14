import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

async function main() {
  const databaseConnection = process.env.DATABASE_URL;
  if (!databaseConnection) {
    throw new Error("DATABASE_URL is not defined");
  }
  const client = postgres(databaseConnection);
  const db = drizzle({ client });
}

main();
