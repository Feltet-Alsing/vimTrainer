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
	let playList = tasks[type].tasks;

	if (difficulty) {
		playList = playList.filter((x) => {
			if (x.difficulty.toLowerCase() === difficulty.toLowerCase()) {
				return x;
			}
		});
	}

	return playList.slice(0, amount);
}
