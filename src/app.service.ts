import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	async pong(): Promise<string> {
		return "pong";
	}
}
