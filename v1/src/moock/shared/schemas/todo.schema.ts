import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { fakeData } from "./todo.example";

const typeDefs = `#graphql

  type Todo{
    id: String
    createAt: String
    updateAt: String
    title: String
    description: String
  }

  type Query{
    todos: [Todo]
  }

`

const resolvers = {
  Query: {
    todos: () => fakeData
  }
}

export {typeDefs, resolvers}