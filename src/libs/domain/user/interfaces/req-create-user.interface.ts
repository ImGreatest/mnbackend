import { User } from "../../../../common/models";

export interface IReqCreateUser extends Omit<User & { consumerRole: string }, "id" | "createdAt" | "updatedAt"> {}
