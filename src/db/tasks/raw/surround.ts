import { difficulty, type } from '../types';

export const surround = [
	// Easy - Basic visual mode surround (viwS) - Clear intent
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
		content: 'if isValid { return true; }',
		facit: 'if (isValid) { return true; }',
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
		content: 'return name: John, age: 30;',
		facit: 'return {name: John, age: 30};',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 5
	},

	// Medium - Change surround (cs) - Fix mismatched or wrong brackets
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
		content: 'function calc[x] { return x * 2; }',
		facit: 'function calc(x) { return x * 2; }',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 8
	},
	{
		content: 'const set = {1, 2, 3};',
		facit: 'const set = [1, 2, 3];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 9
	},
	{
		content: 'return [id: 1, name: "test"];',
		facit: 'return {id: 1, name: "test"};',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 10
	},
	{
		content: 'const tuple = {x, y};',
		facit: 'const tuple = [x, y];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 11
	},
	{
		content: 'if {condition} { doSomething(); }',
		facit: 'if (condition) { doSomething(); }',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 12
	},

	// Hard - Multiple operations
	{
		content: 'console.log(Hello, name);',
		facit: 'console.log("Hello", name);',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 13
	},
	{
		content: 'const user = { name: John, age: 30 };',
		facit: 'const user = { name: "John", age: 30 };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 14
	},
	{
		content: 'const config = { port: 3000, host: localhost };',
		facit: 'const config = { port: 3000, host: "localhost" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 15
	},
	{
		content: 'return { id: 1, name: Alice, role: admin };',
		facit: 'return { id: 1, name: "Alice", role: "admin" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 16
	},
	{
		content: 'const obj = { first: (a), second: (b) };',
		facit: 'const obj = { first: [a], second: [b] };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 17
	},
	{
		content: 'const data = { x: [1], y: [2], z: [3] };',
		facit: 'const data = { x: (1), y: (2), z: (3) };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 18
	},
	{
		content: 'const str = "hello" + "world";',
		facit: "const str = 'hello' + 'world';",
		type: type.surround,
		difficulty: difficulty.hard,
		id: 19
	},
	{
		content: 'alert(Error: + message);',
		facit: 'alert("Error: " + message);',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 20
	}
];
