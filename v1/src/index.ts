import "reflect-metadata"
import { Hono } from 'hono'
import { drizzle } from "drizzle-orm/singlestore/driver"

const app = new Hono()
const db = drizzle(process.env.DATABASE_URL ||  "postgresql://root:123@localhost:3306/todo")

// const todoTable = pgTable('todo',{ 
//   id: 
// })

// AppDataSource.initialize()
//   .then(async () => {
//     app.get('/', (c) => {
//       return c.json({ msg: "hi" })
//     })
//   })

export default app
