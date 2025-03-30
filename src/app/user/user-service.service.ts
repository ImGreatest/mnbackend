import { Injectable } from '@nestjs/common';

@Injectable()
export class UserControllerService {
  async ping(): Promise<string> {
    return "pong"
  }
}
