export async function checkCreated<T extends { id?: string }>(created: T): Promise<void> {
	expect(created).toHaveProperty('id');
	expect(created.id).toBeDefined();
	expect(typeof created.id).toBe('string');
}
