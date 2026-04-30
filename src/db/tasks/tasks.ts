import { typos } from './raw/typos';
export { difficulty, type } from './types';

export const tasks = {
	typos: {
		info: {
			title: 'Typos',
			id: 'typos',
			level: 1
		},
		tasks: typos
	}
};

export function getPlayList(
	type: keyof typeof tasks,
	amount: number,
	difficulty: string
): (typeof tasks)[keyof typeof tasks]['tasks'] {
	const playList = tasks[type].tasks;

	const filtered = playList.filter((x) => {
		if (x.difficulty.toLowerCase() === difficulty.toLowerCase()) {
			return x;
		}
	});

	return filtered.slice(0, amount);
}
