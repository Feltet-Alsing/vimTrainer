import { difficulty, type } from '../types';

export const typos = [
	{
		content: 'cosnt message = "Hello World";',
		facit: 'const message = "Hello World";',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 1
	},
	{
		content: 'fucntion greet() { return "Hi"; }',
		facit: 'function greet() { return "Hi"; }',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 2
	},
	{
		content: 'reutrn value + 10;',
		facit: 'return value + 10;',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 3
	},
	{
		content: 'let usre = { name: "John" };',
		facit: 'let user = { name: "John" };',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 4
	},
	{
		content: 'const arr = [1,2 3];',
		facit: 'const arr = [1,2,3];',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 5
	},
	{
		content:
			'async function fetchData() {\n\tconst data = awiat fetch("/api");\n\treturn data.json();\n}',
		facit:
			'async function fetchData() {\n\tconst data = await fetch("/api");\n\treturn data.json();\n}',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 6
	},
	{
		content: 'const user = { na\'me: "John", age: 30 };',
		facit: 'const user = { name: "John", age: 30 };',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 7
	},
	{
		content: "function cal'culate(x, y) {\n\treturn x + y;\n}",
		facit: 'function calculate(x, y) {\n\treturn x + y;\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 8
	},
	{
		content: 'const message = "Hel\'lo World";',
		facit: 'const message = "Hello World";',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 9
	},
	{
		content: "if (data.len'gth > 0) {\n\treturn true;\n}",
		facit: 'if (data.length > 0) {\n\treturn true;\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 10
	},
	{
		content: 'consle.log("Debug info");',
		facit: 'console.log("Debug info");',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 11
	},
	{
		content: 'imoprt { useState } from "react";',
		facit: 'import { useState } from "react";',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 12
	},
	{
		content: 'exprot const API_URL = "/api";',
		facit: 'export const API_URL = "/api";',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 13
	},
	{
		content: 'const obj = { nmae: "Test" };',
		facit: 'const obj = { name: "Test" };',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 14
	},
	{
		content: 'const total = [1,2,3 4];',
		facit: 'const total = [1,2,3,4];',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 15
	},
	{
		content: 'if (x === udnefined) {\n\treturn null;\n}',
		facit: 'if (x === undefined) {\n\treturn null;\n}',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 16
	},
	{
		content: "const id = use'r.id;",
		facit: 'const id = user.id;',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 17
	},
	{
		content: 'async function loa\'dData() {\n\treturn await fetch("/api");\n}',
		facit: 'async function loadData() {\n\treturn await fetch("/api");\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 18
	},
	{
		content: "const arr = [1, 2, '3];",
		facit: 'const arr = [1, 2, 3];',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 19
	},
	{
		content: "return obj.prop'erty;",
		facit: 'return obj.property;',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 20
	}
];
