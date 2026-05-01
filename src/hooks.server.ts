import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { initDB } from './db/db';
import { getUserFromSession } from './db/sessionFunctions';

// Initialize database once at startup
await initDB();

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('session_id');
	if (sessionId) {
		const user = await getUserFromSession(sessionId);

		if (user) {
			event.locals.user = {
				id: user.id,
				username: user.username,
				created_at: user.created_at
			};
		}
	}

	// Protect all routes except login pages - require authentication
	const publicRoutes = ['/login', '/login/createUser'];
	const isPublicRoute = publicRoutes.some((route) => event.url.pathname.startsWith(route));

	if (!isPublicRoute && !event.locals.user) {
		throw redirect(303, '/login');
	}

	return await resolve(event);
};
