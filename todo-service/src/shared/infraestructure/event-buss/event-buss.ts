// src/shared/infrastructure/event-bus/event-bus.ts
export interface EventBus {
  publish(event: { type: string; payload: any }): Promise<void>;
  subscribe(eventType: string, handler: (event: any) => Promise<void>): Promise<void>;
}