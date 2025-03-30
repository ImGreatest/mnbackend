import { IProfile } from "../../../../common/entities";

export interface IReqCreateProfile extends Omit<IProfile, "createdAt" | "updatedAt"> {}
