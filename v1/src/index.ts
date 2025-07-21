import { Hono } from 'hono'
import { drizzle, NodePgClient, NodePgDatabase } from "drizzle-orm/node-postgres"
import todoapi from "./app/todo.controller"
import ENV from './shared/hono-env'



const app = new Hono<ENV>()
export const db = drizzle(process.env.DATABASE_URL || "postgresql://root:123@localhost:3306/todo")

app.use('*', async (c, next) => {
  // const token = c.env.TOKEN
  // ...
  c.set("db", db);
  await next()
})


//TODO: health check
app.get("/", (c) => c.json({ message: "Welcome to the Todo API!" }));
app.route("/", todoapi);

export default app
