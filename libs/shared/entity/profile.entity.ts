export interface IProfile {
  userId: string;
  firstname?: string;
  middleName?: string;
  lastname?: string;
  address?: string;
  alternateContact?: string;
  createdAt: Date;
  updatedAt?: Date;
}
