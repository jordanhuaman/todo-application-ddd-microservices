import type { EventBussMQEventBuss } from "./RabbitMQEventBuss";

export async function subscribeToUserEvents(eventBuss: EventBussMQEventBuss) {
  await eventBuss.subscribe("UserCreated", async (event) => {
    console.log("Event received in todo-service: ✅✅ 1", event);
  });
}
