import { startStandaloneServer } from "@apollo/server/standalone";
import {resolvers, typedefs } from "./src/shared/infraestructure/graphql/index"
// import { drizzle } from 'drizzle-orm/postgres-js'
// import postgres from 'postgres'

import { ApolloServer } from "@apollo/server";

// async function main() {
//   const databaseConnection = process.env.DATABASE_URL;
//   if (!databaseConnection) {
//     throw new Error("DATABASE_URL is not defined");
//   }
//   const client = postgres(databaseConnection);
//   const db = drizzle({ client });
// }

// main();

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000}
});

console.log(`🚀  Server ready at: ${url}`);