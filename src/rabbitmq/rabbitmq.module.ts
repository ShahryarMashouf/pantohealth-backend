import { Module } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { RabbitmqConsumer } from './rabbitmq-consumer';

@Module({
  providers: [RabbitmqService, RabbitmqConsumer],
  exports: [RabbitmqService],
})
export class RabbitmqModule {}
