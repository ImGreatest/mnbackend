import { Provider } from "@nestjs/common";
import { UserService } from "../user.service";
import { UserRepository } from "../repositories/user.repository";
import { UserAdapter } from "../../../adapter/user/user.adapter";

export const UserProvider: Provider[] = [
  UserService,
  {
    provide: UserRepository,
    useClass: UserAdapter,
  },
];
