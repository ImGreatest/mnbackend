import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class CryptoService {
	getHash(text: string): string {
		return ;
		// TODO fix cfg
    // return bcrypt.hashSync(text, config.HashSaltRound);
	}

	compareHash(text: string, hash: string): boolean {
		return bcrypt.compareSync(text, hash);
	}
}
