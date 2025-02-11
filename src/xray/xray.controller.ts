import { Controller, Get, Post, Body } from '@nestjs/common';
import { XrayService } from './xray.service';

@Controller('xrays') 
export class XrayController {
  constructor(private readonly xrayService: XrayService) {}

  @Post()
  async create(@Body() xrayData) {
    return this.xrayService.createXray(xrayData);
  }

  @Get()
  async findAll() {
    return this.xrayService.findAll();
  }
}
