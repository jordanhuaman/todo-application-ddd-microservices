import type { EventBussMQEventBuss } from "./RabbitMQEventBuss";
import { SaveUserWelcomePlatform } from "../application/save-user-welcome-platform";
import type { userRepository } from "../domain/user-repository";

export async function subscribeToUserEvents(eventBuss: EventBussMQEventBuss, repository: userRepository) {
  await eventBuss.subscribe("UserCreated", async (event) => {
    console.log("Event received in todo-service: ✅✅ 1", event);
    const saveUserWelcomePlatform = new SaveUserWelcomePlatform(repository);
    await saveUserWelcomePlatform.execute(event.payload.id);
  });
  await eventBuss.subscribe("UserDeleted", async (event) => {
    console.log("Event received in todo-service: ❌❌ 1", event);
  });
}
