export interface IProduct {
	id: string;
	name: string;
	description?: string;
	cost: number;
	compound: string;
	collectionId: string;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
