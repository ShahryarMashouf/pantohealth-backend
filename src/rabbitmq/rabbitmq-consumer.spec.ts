import { Test, TestingModule } from '@nestjs/testing';
import { RabbitmqConsumer } from '../rabbitmq/rabbitmq-consumer';

describe('RabbitmqConsumer', () => {
  let provider: RabbitmqConsumer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RabbitmqConsumer],
    }).compile();

    provider = module.get<RabbitmqConsumer>(RabbitmqConsumer);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
