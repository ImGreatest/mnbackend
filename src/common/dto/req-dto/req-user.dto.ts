export interface ReqCreateUserDto {
	consumeRole: string;
	username: string;
	login?: string;
	email: string;
	phone?: string;
	password: string;
	role: string;
}
