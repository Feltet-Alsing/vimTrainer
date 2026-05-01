import { typos } from './raw/typos';
import { move } from './raw/move';
import { surround } from './raw/surround';
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
	},
	surround: {
		info: {
			title: 'Surround',
			id: 'surround',
			level: 3
		},
		tasks: surround
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

	let idx = playList.length;

	while (idx !== 0) {
		const randomIndex = Math.floor(Math.random() * idx);
		idx--;

		[playList[idx], playList[randomIndex]] = [playList[randomIndex], playList[idx]];
	}

	return playList.slice(0, amount);
}
