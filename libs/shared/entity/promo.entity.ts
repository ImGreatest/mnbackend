import { EPromoType } from "@prisma/client";

export interface IPromo {
  id: string;
  code: string;
  startTimeActive: Date;
  endTimeActive: Date;
  type: EPromoType;
  percentage: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
