import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { DateTime } from "luxon";
import { randomBytes } from "node:crypto";
import { PrismaService } from "../../../libs/services/prisma/prisma.service";
import { config } from "../../../config/config";
import { IPayload } from "./payloads/payload.interface";
import { ResSignDto } from "./dto/res-sign.dto";
import { ReqRefreshDto } from "./dto/req-refresh.dto";
import { UserService } from "../../../libs/domain/user/user.service";

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  generateJwt(payload: IPayload) {
    return this.jwtService.sign(payload, {
      secret: config.JwtSecret,
      expiresIn: config.JwtExpiresIn,
    });
  }

  async generateRefreshToken(
    userId: string,
    deviceId: string,
  ): Promise<string> {
    const token = await this.prisma.refreshToken.create({
      data: {
        token: randomBytes(config.RefreshLength).toString("hex"),
        deviceId: deviceId,
        userId: userId,
        expiresAt: DateTime.now().plus({ month: 1 }).toJSDate(),
      },
    });

    return token.token;
  }

  async refresh(data: ReqRefreshDto): Promise<ResSignDto> {
    const oldRefresh = await this.prisma.refreshToken.findUnique({
      where: {
        token_deviceId: {
          token: data.token,
          deviceId: data.deviceId,
        },
      },
    });
    const user = await this.userService.getUser(oldRefresh.userId);

    if (!oldRefresh || !user) {
      throw new Error("Auth error");
    }

    await this.prisma.refreshToken.delete({
      where: {
        token_deviceId: {
          token: data.token,
          deviceId: data.deviceId,
        },
      },
    });
    const access = this.generateJwt({
      sub: oldRefresh.userId,
      role: user.role,
    });
    const refresh = await this.generateRefreshToken(
      oldRefresh.userId,
      oldRefresh.deviceId,
    );

    return {
      access: access,
      refresh: refresh,
    };
  }
}
