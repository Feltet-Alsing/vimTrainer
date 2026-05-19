import { difficulty, type } from '../types';

export const surround = [
	{
		content: 'console.log(Hello);',
		facit: 'console.log("Hello");',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 1
	},
	{
		content: 'const name = John Doe;',
		facit: 'const name = "John Doe";',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 2
	},
	{
		content: 'if count > 0 { return true; }',
		facit: 'if (count > 0) { return true; }',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 3
	},
	{
		content: 'const arr = 1, 2, 3;',
		facit: 'const arr = [1, 2, 3];',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 4
	},
	{
		content: 'const obj = "name: John, age: 30";',
		facit: 'const obj = {name: John, age: 30};',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 5
	},
	{
		content: 'const arr = (1, 2, 3);',
		facit: 'const arr = [1, 2, 3];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 6
	},
	{
		content: 'const obj = [name: "John"];',
		facit: 'const obj = {name: "John"};',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 7
	},
	{
		content: 'function init[config] { setup(); }',
		facit: 'function init(config) { setup(); }',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 8
	},
	{
		content: 'const tag = <div>Hello World</div>;',
		facit: 'const tag = "<div>Hello World</div>";',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 9
	},
	{
		content: 'const config = { port: 3000, host: localhost, debug: true };',
		facit: 'const config = { port: 3000, host: "localhost", debug: true };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 10
	},
	{
		content: 'console.error(Error);',
		facit: 'console.error("Error");',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 11
	},
	{
		content: 'const title = Welcome;',
		facit: 'const title = "Welcome";',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 12
	},
	{
		content: 'while x < 10 { x++; }',
		facit: 'while (x < 10) { x++; }',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 13
	},
	{
		content: 'const nums = 10, 20, 30;',
		facit: 'const nums = [10, 20, 30];',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 14
	},
	{
		content: 'return "id: 1, status: active";',
		facit: 'return {id: 1, status: active};',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 15
	},
	{
		content: 'const list = (a, b, c);',
		facit: 'const list = [a, b, c];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 16
	},
	{
		content: 'const data = [x: 10, y: 20];',
		facit: 'const data = {x: 10, y: 20};',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 17
	},
	{
		content: 'function process[data] { return data; }',
		facit: 'function process(data) { return data; }',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 18
	},
	{
		content: 'const html = <span>Text</span>;',
		facit: 'const html = "<span>Text</span>";',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 19
	},
	{
		content: 'const user = { id: 123, name: Admin, active: true };',
		facit: 'const user = { id: 123, name: "Admin", active: true };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 20
	}
];
