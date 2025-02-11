import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { RabbitmqConsumer } from './rabbitmq/rabbitmq-consumer';
import { XrayModule } from './xray/xray.module';
import { HelloController } from './hello.controller';

@Module({
  imports: [RabbitmqModule, XrayModule],
  controllers: [AppController, HelloController],
  providers: [AppService, RabbitmqConsumer],

})
export class AppModule {}



