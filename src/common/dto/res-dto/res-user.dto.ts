export interface ResUserDto {
	id: string;
	username: string;
	login?: string;
	email: string;
	phone?: string;
	password: string;
	role: string;
	createdAt: Date;
	updatedAt?: Date;
}

export interface ResCreateUserDto extends ResUserDto {}

export interface ResUsersDto {
	users: ResUserDto[];
}
