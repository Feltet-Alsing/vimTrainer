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
		content: 'return name: John, age: 30;',
		facit: 'return {name: John, age: 30};',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 5
	},
	{
		content: 'const message = Welcome back;',
		facit: 'const message = "Welcome back";',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 6
	},
	{
		content: 'while count < 10 { process(); }',
		facit: 'while (count < 10) { process(); }',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 7
	},
	{
		content: 'const list = 1, 2, 3;',
		facit: 'const list = [1, 2, 3];',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 8
	},
	{
		content: 'return id: 42, status: 200;',
		facit: 'return {id: 42, status: 200};',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 9
	},
	{
		content: 'console.error(Error occurred);',
		facit: 'console.error("Error occurred");',
		type: type.surround,
		difficulty: difficulty.easy,
		id: 10
	},

	// Medium - Change surround (cs) - Fix mismatched or wrong brackets
	{
		content: 'const arr = (1, 2, 3);',
		facit: 'const arr = [1, 2, 3];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 11
	},
	{
		content: 'const obj = [name: "John"];',
		facit: 'const obj = {name: "John"};',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 12
	},
	{
		content: 'function calc[x] { return x * 2; }',
		facit: 'function calc(x) { return x * 2; }',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 13
	},
	{
		content: 'const set = {1, 2, 3};',
		facit: 'const set = [1, 2, 3];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 14
	},
	{
		content: 'return [id: 1, name: "test"];',
		facit: 'return {id: 1, name: "test"};',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 15
	},
	{
		content: 'const tuple = {10, 20};',
		facit: 'const tuple = [10, 20];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 16
	},
	{
		content: 'if {count > 5} { doSomething(); }',
		facit: 'if (count > 5) { doSomething(); }',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 17
	},
	{
		content: 'const coords = (x: 10, y: 20);',
		facit: 'const coords = {x: 10, y: 20};',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 18
	},
	{
		content: 'function init[config] { setup(); }',
		facit: 'function init(config) { setup(); }',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 19
	},
	{
		content: 'const values = {10, 20, 30};',
		facit: 'const values = [10, 20, 30];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 20
	},
	{
		content: 'return (status: "ok", code: 200);',
		facit: 'return {status: "ok", code: 200};',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 21
	},
	{
		content: 'const items = (a, b, c, d);',
		facit: 'const items = [a, b, c, d];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 22
	},
	{
		content: 'while [i < 10] { update(); }',
		facit: 'while (i < 10) { update(); }',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 23
	},
	{
		content: 'const pair = {100, 200};',
		facit: 'const pair = [100, 200];',
		type: type.surround,
		difficulty: difficulty.medium,
		id: 24
	},

	// Hard - Multiple operations
	{
		content: 'console.log(Hello, World);',
		facit: 'console.log("Hello", "World");',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 25
	},
	{
		content: 'const user = { name: John, age: 30 };',
		facit: 'const user = { name: "John", age: 30 };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 26
	},
	{
		content: 'const config = { port: 3000, host: localhost };',
		facit: 'const config = { port: 3000, host: "localhost" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 27
	},
	{
		content: 'return { id: 1, name: Alice, role: admin };',
		facit: 'return { id: 1, name: "Alice", role: "admin" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 28
	},
	{
		content: 'const api = { url: /api/data, method: GET };',
		facit: 'const api = { url: "/api/data", method: "GET" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 29
	},
	{
		content: 'const colors = { primary: red, secondary: blue, accent: green };',
		facit: 'const colors = { primary: "red", secondary: "blue", accent: "green" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 30
	},
	{
		content: 'const url = "https://" + "api.example.com" + "/users";',
		facit: "const url = 'https://' + 'api.example.com' + '/users';",
		type: type.surround,
		difficulty: difficulty.hard,
		id: 31
	},
	{
		content: 'alert(Error: + Something went wrong);',
		facit: 'alert("Error: " + "Something went wrong");',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 32
	},
	{
		content: 'const person = { first: Jane, last: Smith };',
		facit: 'const person = { first: "Jane", last: "Smith" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 33
	},
	{
		content: 'console.log(Status:, OK, Mode:, production);',
		facit: 'console.log("Status:", "OK", "Mode:", "production");',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 34
	},
	{
		content: 'const settings = { theme: dark, lang: en };',
		facit: 'const settings = { theme: "dark", lang: "en" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 35
	},
	{
		content: 'return { type: user, email: test@mail.com };',
		facit: 'return { type: "user", email: "test@mail.com" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 36
	},
	{
		content: 'const routes = { home: /, about: /about, contact: /contact };',
		facit: 'const routes = { home: "/", about: "/about", contact: "/contact" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 37
	},
	{
		content: 'const user = { role: admin, status: active, level: premium };',
		facit: 'const user = { role: "admin", status: "active", level: "premium" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 38
	},
	{
		content: 'const msg = "Error: " + "404" + " - " + "Not Found";',
		facit: "const msg = 'Error: ' + '404' + ' - ' + 'Not Found';",
		type: type.surround,
		difficulty: difficulty.hard,
		id: 39
	},
	{
		content: 'const meta = { title: Home, desc: Welcome page };',
		facit: 'const meta = { title: "Home", desc: "Welcome page" };',
		type: type.surround,
		difficulty: difficulty.hard,
		id: 40
	}
];
