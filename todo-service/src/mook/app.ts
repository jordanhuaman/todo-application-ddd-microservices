import { subscribeToUserEvents } from "./user/infraestructure/user-event-subscriber";
import { EventBussMQEventBuss } from "./user/infraestructure/RabbitMQEventBuss";

import { drizzle } from "drizzle-orm/postgres-js";
import { UserController } from "./user/infraestructure/user-controller";
import { UserRepositoryImpl } from "./user/infraestructure/user-repository-impl";

import amqp from "amqplib";

const connection = await amqp.connect("amqp://user:password@localhost");
const channel = await connection.createChannel();
const eventBuss = new EventBussMQEventBuss(channel);
subscribeToUserEvents(eventBuss);


const db = drizzle(process.env.DATABASE_URL!, { logger: true });
const userRepositoryImpl = new UserRepositoryImpl(db);
const userController = new UserController(userRepositoryImpl, eventBuss)

export { userController};