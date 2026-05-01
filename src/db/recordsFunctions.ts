import { pool } from './db';

export async function getRecord(userId: number, taskId: string) {
	const result = await pool.query(
		'SELECT * FROM records WHERE user_id = $1 AND task_id = $2 ORDER BY record_time ASC LIMIT 1',
		[userId, taskId]
	);

	if (result.rows.length === 0) {
		return null;
	}

	return result.rows[0];
}

export async function createRecord(userId: number, taskId: string, recordTime: number) {
	const result = await pool.query(
		'INSERT INTO records (user_id, task_id, record_time) VALUES ($1, $2, $3) RETURNING *',
		[userId, taskId, recordTime]
	);

	return result.rows[0];
}

export async function updateRecord(user_id: number, task_id: string, record_time: number) {
	// Get current best record
	const currentRecord = await getRecord(user_id, task_id);

	// If no record exists or new time is faster, update/create
	if (!currentRecord || record_time < currentRecord.record_time) {
		const result = await pool.query(
			`INSERT INTO records (user_id, task_id, record_time) 
			 VALUES ($1, $2, $3) 
			 ON CONFLICT (user_id, task_id) 
			 DO UPDATE SET record_time = EXCLUDED.record_time, created_at = NOW() 
			 RETURNING *`,
			[user_id, task_id, record_time]
		);
		return result.rows[0];
	}

	// Return current record if new time wasn't faster
	return currentRecord;
}
