import { tasks } from '../db/tasks/tasks';

export const load = async () => {
	const typos = tasks['typos'];

	return { typos };
};
