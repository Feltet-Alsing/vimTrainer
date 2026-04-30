import { getPlayList, tasks } from '../../../db/tasks/tasks.js';

export const load = ({ url }) => {
	const keys = url.pathname.slice(7).split('-');

	const taskList = getPlayList(keys[0] as keyof typeof tasks, Number(keys[1]), keys[2]);

	return { tasks: taskList };
};
