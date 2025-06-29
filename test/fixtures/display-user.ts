import { getUser, getUserName } from './user-utils.js';

// Function that uses the inlined functions
export function displayUserInfo(userId: number) {
	const greeting = `Hello, ${getUserName(getUser(userId))}!`;
	const status = getUser(userId)?.active ? 'Active' : 'Inactive';
	return `${greeting} Status: ${status}`;
} 