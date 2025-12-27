import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";

import { drizzle } from "drizzle-orm/postgres-js";
import { UserController } from "./src/mook/user/infraestructure/user-controller";
import { UserRepositoryImpl } from "./src/mook/user/infraestructure/user-repository-impl";

import { EventBussMQEventBuss } from "./src/shared/infraestructure/event-buss/RabbitMQEventBuss";

import amqp from "amqplib";

const connection = await amqp.connect("amqp://user:password@localhost");
const channel = await connection.createChannel();
const eventBuss = new EventBussMQEventBuss(channel);
await eventBuss.subscribe("UserCreated", async (event) => {
  console.log("Event received in todo-service:", event);
});

const db = drizzle(process.env.DATABASE_URL!, { logger: true });
const userRepositoryImpl = new UserRepositoryImpl(db);
const userController = new UserController(userRepositoryImpl, eventBuss)


const typedefs = `#graphql
  type user{
    id: String,
    name: String,
    age: Int,
    email: String,
    createAt: String,
  }
  type Query{
    testUsers: [user]
  }
  type Mutation{
    createUser(name: String, age: Int, email: String): String
  }
`
const resolvers = {
  Query: {
    testUsers: () => userController.getAllUsers(),
  },
  Mutation: {
    createUser: (_: unknown, {name, age, email}:any) => userController.createUser({ name, age, email })
  }
}
const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);