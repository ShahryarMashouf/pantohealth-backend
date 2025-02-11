import { Injectable } from '@nestjs/common';


@Injectable()
export class XrayService {
  private xrays: any[] = [];

  createXray(data: any) {
    this.xrays.push(data);
    return data;
  }

  findAll() {
    return this.xrays;
  }
}
