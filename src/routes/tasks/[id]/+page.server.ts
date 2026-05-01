import { getPlayList, tasks } from '../../../db/tasks/tasks.js';

export const load = ({ url }) => {
	const keys = url.pathname.slice(7).split('-');

	if (/[,]/.test(keys[0])) {
		const splitKeys = keys[0].split(',') as (keyof typeof tasks)[];
		return { tasks: getPlayList(splitKeys, Number(keys[1]), keys[2]) };
	} else {
		return { tasks: getPlayList([keys[0] as keyof typeof tasks], Number(keys[1]), keys[2]) };
	}
};
