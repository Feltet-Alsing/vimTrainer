import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = ({ locals }) => {
	return {
		user: locals.user ?? null
	};
};

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete('session_id', { path: '/' });
		throw redirect(302, '/');
	}
};
