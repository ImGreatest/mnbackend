import { IReqCreateProfile } from "./req-create-profile.interface";

export interface IReqUpdateProfile extends Omit<IReqCreateProfile, "userId"> {}
