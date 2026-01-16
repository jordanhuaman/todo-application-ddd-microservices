import { EventBussMQEventBuss } from "./RabbitMQEventBuss";
import amqp from "amqplib";

export async function startUserEventListener() {
  const connection = await amqp.connect("amqp://user:password@localhost");
  const channel = await connection.createChannel();
  const eventBuss = new EventBussMQEventBuss(channel);
  await eventBuss.subscribe("UserCreated", async (event) => {
    console.log("Event received in todo-service:", event);
  });
}
