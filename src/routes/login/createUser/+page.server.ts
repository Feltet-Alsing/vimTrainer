import type { Actions } from './$types';
import { pool } from '../../../db/db';
import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export const actions = {
	createUser: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (!username || !password) {
			return { error: 'Username and password are required' };
		}

		const usernameStr = username.toString();
		const passwordStr = password.toString();

		const existing = await pool.query('SELECT * FROM users WHERE username = $1', [usernameStr]);

		if (existing.rows.length > 0) {
			return { error: 'Username already taken' };
		}

		const hashedPassword = await bcrypt.hash(passwordStr, 10);

		await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [
			usernameStr,
			hashedPassword
		]);

		redirect(303, '/login');
	}
} satisfies Actions;
