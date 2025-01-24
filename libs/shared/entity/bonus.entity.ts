export interface IBonus {
  userId: string;
  percentage?: number;
  bonusValue?: number;
  startValue?: number;
  createdAt: Date;
  updatedAt?: Date;
}
