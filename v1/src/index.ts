import "reflect-metadata"
import { Hono } from 'hono'
import { drizzle } from "drizzle-orm/node-postgres"
import { data } from "./db/user-schema"

const app = new Hono()
const db = drizzle(process.env.DATABASE_URL ||  "postgresql://root:123@localhost:3306/todo")


export default app
