import { Injectable, OnModuleInit } from '@nestjs/common';
import { connect, Channel, ConsumeMessage } from 'amqplib';

@Injectable()
export class RabbitmqConsumer implements OnModuleInit {
  private channel: Channel;

  async onModuleInit() {
    const connection = await connect('amqp://localhost');
    this.channel = await connection.createChannel();

    const queue = 'xray_queue';
    await this.channel.assertQueue(queue);

    this.channel.consume(queue, (msg: ConsumeMessage | null) => {
      if (msg) {
        const data = JSON.parse(msg.content.toString());
        console.log('Received x-ray data:', data);
        this.channel.ack(msg);
      }
    });
  }
}
