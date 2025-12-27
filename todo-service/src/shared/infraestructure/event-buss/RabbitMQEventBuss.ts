import type { EventBus } from "./event-buss";
import amqp from "amqplib";

export class EventBussMQEventBuss implements EventBus {

  private channel: amqp.Channel;

  constructor(channel: amqp.Channel) {
    this.channel = channel;
  }

  async publish(event: { type: string; payload: any }): Promise<void> {
    const queue = event.type;
    await this.channel.assertQueue(queue, { durable: true });
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(event.payload)));
  }

  async subscribe(eventType: string, handler: (event: any) => Promise<void>): Promise<void> {
    await this.channel.assertQueue(eventType, { durable: true });
    this.channel.consume(eventType, async (msg) => {
      if (msg) {
        const payload = JSON.parse(msg.content.toString());
        await handler({ type: eventType, payload });
        this.channel.ack(msg);
      }
    });
  }

}