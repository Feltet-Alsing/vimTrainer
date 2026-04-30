import { typos } from './raw/typos';
import { move } from './raw/move';
export { difficulty, type } from './types';

export const tasks = {
	typos: {
		info: {
			title: 'Typos',
			id: 'typos',
			level: 1
		},
		tasks: typos
	},
	move: {
		info: {
			title: 'Move Code',
			id: 'move',
			level: 2
		},
		tasks: move
	}
};

export function getPlayList(
	type: keyof typeof tasks,
	amount: number,
	difficulty: string | undefined
): (typeof tasks)[keyof typeof tasks]['tasks'] {
	const playList = tasks[type].tasks;

	const filtered = playList.filter((x) => {
		if (difficulty) {
			if (x.difficulty.toLowerCase() === difficulty.toLowerCase()) {
				return x;
			}
		} else {
			return x;
		}
	});

	return filtered.slice(0, amount);
}
