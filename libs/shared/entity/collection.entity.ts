export interface ICollection {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
