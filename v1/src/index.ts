import "reflect-metadata"
import { Hono } from 'hono'
import { AppDataSource } from "./moock/rest/infraestructure/postgres/globalconfig"
import { ApolloServer } from "@apollo/server"
import { resolvers, typeDefs } from "./moock/shared/schemas/todo.schema"
import { startStandaloneServer } from "@apollo/server/dist/esm/standalone"


const app = new Hono()

const graphqlServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
})


AppDataSource.initialize()
  .then(async () => {
    app.get('/', (c) => {
      return c.json({ msg: "hid" })
    })
  })

export default app
