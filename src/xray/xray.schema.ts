import { Schema, Document } from 'mongoose';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { XrayService } from './xray.service';

export const XraySchema = new Schema({
  deviceId: String,
  time: Number,
  dataLength: Number,
  dataVolume: Number,
});

export interface XrayDocument extends Document {
  deviceId: string;
  time: number;
  dataLength: number;
  dataVolume: number;
}



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
