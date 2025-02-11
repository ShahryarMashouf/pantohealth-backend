import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('hello')
@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
