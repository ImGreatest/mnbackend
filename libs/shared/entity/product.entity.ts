export interface IProduct {
  id: string;
  name: string;
  desc?: string;
  cost: number;
  compound: string;
  collectionId: string;
  categoryId: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
