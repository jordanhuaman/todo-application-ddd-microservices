import { Hono, Context } from "hono";
import { todo, TODO_TYPE_DB } from "../db/user-schema";
import ENV from "../shared/hono-env";
import { SERVICE_CONTAINER } from "../shared/application/use-cases";

const todoapi = new Hono<ENV>().basePath("/todo");

todoapi.get("/", (c) => c.json({ message: "Welcome to the Todo API!" }));
todoapi.post("/", async (c) => {
  const todoData = await c.req.json() as TODO_TYPE_DB;

  const { title, description, user } = todoData;
  const futureTodo =await SERVICE_CONTAINER.todo.create(title, description, user as string);

  return c.json({ message: "Todo created successfully", data: todoData });
})
export default todoapi;