export interface IBucket {
  id: string;
  userId: string;
  productId: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
