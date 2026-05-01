import type { Handle } from '@sveltejs/kit';
import { initDB } from './db/db';
import { getUserFromSession } from './db/sessionFunctions';

// Initialize database once at startup
await initDB();

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('session_id');
	if (sessionId) {
		const user = await getUserFromSession(sessionId);
		console.log('User from session:', user);

		if (user) {
			event.locals.user = {
				id: user.id,
				username: user.username,
				created_at: user.created_at
			};
			console.log('Set locals.user:', event.locals.user);
		}
	}

	return await resolve(event);
};
