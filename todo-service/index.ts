import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { userController } from "./src/mook/app"; 



// Setup RabbitMQ Event Bus and subscribe to events


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