import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { ResCreateUserDto, ResUserDto } from "../common/dto/res-dto/res-user.dto";
import { ReqCreateUserDto } from "../common/dto/req-dto/req-user.dto";
import { Observable } from "rxjs";

@Controller('user')
export class UserServiceController {
  constructor(
    @Inject('USER-SERVICE') private client: ClientProxy,
  ) {}

  @Post('create-user')
  createUser(@Body() data: ReqCreateUserDto ): Observable<ResCreateUserDto> {
    return this.client.send({ cmd: 'createUser' }, data);
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string): Observable<ResUserDto> {
    return this.client.send({ cmd: 'getUser' }, userId);
  }

  @Get('users')
  getUsers(): Observable<>
}

