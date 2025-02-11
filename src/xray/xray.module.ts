import { Module } from '@nestjs/common';
import { XrayService } from './xray.service';
import { XrayController } from './xray.controller';

@Module({
  providers: [XrayService],
  controllers: [XrayController]
})
export class XrayModule {}

