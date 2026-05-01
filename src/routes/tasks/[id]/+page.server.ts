import { getPlayList, tasks } from '../../../db/tasks/tasks.js';
import { updateRecord } from '../../../db/recordsFunctions.js';
import { fail } from '@sveltejs/kit';

export const load = ({ url, locals }) => {
	const keys = url.pathname.slice(7).split('-');

	let taskType: string;
	let playlistTasks;

	if (/[,]/.test(keys[0])) {
		const splitKeys = keys[0].split(',') as (keyof typeof tasks)[];
		taskType = splitKeys.join(',');
		playlistTasks = getPlayList(splitKeys, Number(keys[1]), keys[2]);
	} else {
		taskType = keys[0];
		playlistTasks = getPlayList([keys[0] as keyof typeof tasks], Number(keys[1]), keys[2]);
	}

	return {
		tasks: playlistTasks,
		taskType,
		user: locals.user ?? null
	};
};

export const actions = {
	saveRecord: async ({ request, locals }) => {
		const user = locals.user;
		if (!user) {
			return fail(401, { message: 'Unauthorized' });
		}

		const data = await request.formData();
		const taskType = data.get('taskType') as string;
		const recordTime = Number(data.get('recordTime'));

		if (!taskType || !recordTime) {
			return fail(400, { message: 'Missing required fields' });
		}

		try {
			const record = await updateRecord(user.id, taskType, recordTime);
			return { success: true, record };
		} catch (error) {
			console.error('Error saving record:', error);
			return fail(500, { message: 'Failed to save record' });
		}
	}
};
