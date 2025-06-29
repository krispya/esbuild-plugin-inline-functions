// Mock dependencies for the test
// @todo: You shouldn't need to export these
export const userCache = new Map();
export const database = { users: [{ id: 1, name: 'John', active: true }] };

// Functions marked with @inline
export /* @inline */ function getUser(id: number) {
	return userCache.get(id) ?? database.users.find(u => u.id === id);
}

export /* @inline */ function getUserName(user?: { name: string }) {
	return user?.name ?? 'Unknown';
} 