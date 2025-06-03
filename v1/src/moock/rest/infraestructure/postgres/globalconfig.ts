import { DataSource } from "typeorm";
import { TodoEntity } from "../../domain/TodoEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "todo",
  //!: change the syncrhonize in production
  synchronize: false,
  logging: true,
  entities: [TodoEntity],
  subscribers: [],
  migrations: [],
})