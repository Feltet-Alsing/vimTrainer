import type { Actions } from './$types';
import { pool } from '../../db/db';
import { createSession } from '../../db/sessionFunctions';
import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export const load = async () => {
	return {};
};

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (!username || !password) {
			return { error: 'Username and password are required' };
		}

		const usernameStr = username.toString();
		const passwordStr = password.toString();

		const result = await pool.query('SELECT * FROM users WHERE username = $1', [usernameStr]);

		if (result.rows.length === 0) {
			return { error: 'User not found' };
		}

		const user = result.rows[0];

		const isValidPassword = await bcrypt.compare(passwordStr, user.password);

		if (!isValidPassword) {
			return { error: 'Invalid password' };
		}

		const sessionId = await createSession(user.id);

		cookies.set('session_id', sessionId, {
			path: '/',
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 7
		});

		redirect(303, '/');
	}
} satisfies Actions;
