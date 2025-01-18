import { Provider } from "@nestjs/common";
import { ProfileService } from "../profile.service";
import { ProfileRepository } from "../repositories/profile.repository";
import { ProfileAdapter } from "../../../adapter/profile/profile.adapter";

export const ProfileProvider: Provider[] = [
	ProfileService,
	{
		provide: ProfileRepository,
		useClass: ProfileAdapter,
	}
];
