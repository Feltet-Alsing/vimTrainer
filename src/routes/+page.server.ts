import { tasks } from '../db/tasks/tasks';
import { getRecord } from '../db/recordsFunctions';

export const load = async ({ locals }) => {
	const typos = tasks['typos'];
	const user = locals.user;

	// Fetch records if user is logged in
	const records: Record<string, { record_time: number; task_id: string }> = {};
	if (user) {
		// Fetch records for each task type
		for (const taskType of Object.keys(tasks)) {
			const record = await getRecord(user.id, taskType);
			if (record) {
				records[taskType] = record;
			}
		}

		// Also fetch mixed task record
		const mixedTaskType = 'typos,move,surround';
		const mixedRecord = await getRecord(user.id, mixedTaskType);
		if (mixedRecord) {
			records[mixedTaskType] = mixedRecord;
		}
	}

	return { typos, records };
};
