import { Profile, User } from "../../../../common/models";

export interface IResUsers {
	users: (User & Profile)[];
}
