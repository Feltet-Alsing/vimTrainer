import { difficulty, type } from '../types';

export const move = [
	// Easy - Simple two-line swaps
	{
		content: 'console.log(result);\nconst result = 42;',
		facit: 'const result = 42;\nconsole.log(result);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 1
	},
	{
		content:
			'const fullName = firstName + " " + lastName;\nconst firstName = "John";\nconst lastName = "Doe";',
		facit:
			'const firstName = "John";\nconst lastName = "Doe";\nconst fullName = firstName + " " + lastName;',
		type: type.move,
		difficulty: difficulty.easy,
		id: 2
	},
	{
		content: 'return total;\nconst total = a + b;',
		facit: 'const total = a + b;\nreturn total;',
		type: type.move,
		difficulty: difficulty.easy,
		id: 3
	},
	{
		content: 'greet("World");\nconst greet = (name) => {\n\tconsole.log(`Hello ${name}`);\n};',
		facit: 'const greet = (name) => {\n\tconsole.log(`Hello ${name}`);\n};\ngreet("World");',
		type: type.move,
		difficulty: difficulty.easy,
		id: 4
	},
	{
		content: 'console.log(message);\nconst message = "Hello World";',
		facit: 'const message = "Hello World";\nconsole.log(message);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 5
	},
	{
		content:
			'module.exports = calculator;\nconst calculator = (a, b) => {\n\treturn { add: a + b, multiply: a * b };\n};',
		facit:
			'const calculator = (a, b) => {\n\treturn { add: a + b, multiply: a * b };\n};\nmodule.exports = calculator;',
		type: type.move,
		difficulty: difficulty.easy,
		id: 6
	},
	{
		content: 'user.save();\nconst user = new User("John");',
		facit: 'const user = new User("John");\nuser.save();',
		type: type.move,
		difficulty: difficulty.easy,
		id: 7
	},

	// Medium - Multiple lines or less obvious ordering
	{
		content: 'const full = first + last;\nconst first = "John";\nconst last = "Doe";',
		facit: 'const first = "John";\nconst last = "Doe";\nconst full = first + last;',
		type: type.move,
		difficulty: difficulty.medium,
		id: 8
	},
	{
		content: 'processData(data);\nvalidateData(data);\nconst data = fetchData();',
		facit: 'const data = fetchData();\nvalidateData(data);\nprocessData(data);',
		type: type.move,
		difficulty: difficulty.medium,
		id: 9
	},
	{
		content:
			'export { helper };\n\nconst helper = () => {\n\treturn "help";\n};\n\nconst main = () => {\n\treturn helper();\n};',
		facit:
			'const helper = () => {\n\treturn "help";\n};\n\nconst main = () => {\n\treturn helper();\n};\n\nexport { helper };',
		type: type.move,
		difficulty: difficulty.medium,
		id: 10
	},
	{
		content:
			'const config = {\n\tport: PORT,\n\thost: HOST\n};\nconst PORT = 3000;\nconst HOST = "localhost";',
		facit:
			'const PORT = 3000;\nconst HOST = "localhost";\nconst config = {\n\tport: PORT,\n\thost: HOST\n};',
		type: type.move,
		difficulty: difficulty.medium,
		id: 11
	},
	{
		content:
			'return {\n\tusername,\n\temail,\n\tid\n};\nconst id = user.id;\nconst username = user.name;\nconst email = user.email;',
		facit:
			'const id = user.id;\nconst username = user.name;\nconst email = user.email;\nreturn {\n\tusername,\n\temail,\n\tid\n};',
		type: type.move,
		difficulty: difficulty.medium,
		id: 12
	},
	{
		content:
			'if (isValid) {\n\tsubmit();\n}\nconst isValid = validate(data);\nconst data = getFormData();',
		facit:
			'const data = getFormData();\nconst isValid = validate(data);\nif (isValid) {\n\tsubmit();\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 13
	},

	// Hard - Complex reordering with multiple dependencies
	{
		content:
			'const api = new APIClient(config);\nconst endpoint = config.endpoint;\nconst config = loadConfig();\n\napi.connect(endpoint);',
		facit:
			'const config = loadConfig();\nconst endpoint = config.endpoint;\nconst api = new APIClient(config);\n\napi.connect(endpoint);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 14
	},
	{
		content:
			'async function init() {\n\tawait connect(dbUrl);\n\tawait loadSchema(db);\n\tconst db = getDatabase();\n\tconst dbUrl = getConnectionString();\n}',
		facit:
			'async function init() {\n\tconst dbUrl = getConnectionString();\n\tconst db = getDatabase();\n\tawait connect(dbUrl);\n\tawait loadSchema(db);\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 15
	},
	{
		content: 'const result = calculate(x, y, z);\nconst z = 30;\nconst x = 10;\nconst y = 20;',
		facit: 'const x = 10;\nconst y = 20;\nconst z = 30;\nconst result = calculate(x, y, z);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 16
	},
	{
		content:
			'class Calculator {\n\tconstructor() {\n\t\tthis.result = initialValue;\n\t}\n\n\treset() {\n\t\tthis.result = initialValue;\n\t}\n}\n\nconst initialValue = 0;',
		facit:
			'const initialValue = 0;\n\nclass Calculator {\n\tconstructor() {\n\t\tthis.result = initialValue;\n\t}\n\n\treset() {\n\t\tthis.result = initialValue;\n\t}\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 17
	},
	{
		content:
			'const user = {\n\temail: userEmail,\n\tname: userName,\n\tid: userId,\n\trole: userRole\n};\nconst userId = 1;\nconst userName = "John";\nconst userEmail = "john@example.com";\nconst userRole = "admin";',
		facit:
			'const userId = 1;\nconst userName = "John";\nconst userEmail = "john@example.com";\nconst userRole = "admin";\nconst user = {\n\temail: userEmail,\n\tname: userName,\n\tid: userId,\n\trole: userRole\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 18
	},
	{
		content:
			'const total = items.reduce((sum, item) => sum + item.price, startValue);\nconst items = getCartItems();\nconst startValue = 0;',
		facit:
			'const startValue = 0;\nconst items = getCartItems();\nconst total = items.reduce((sum, item) => sum + item.price, startValue);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 19
	},
	{
		content:
			'const server = createServer(config);\nconst config = buildConfig();\n\nserver.start(port);\nconst port = 3000;',
		facit:
			'const port = 3000;\nconst config = buildConfig();\nconst server = createServer(config);\n\nserver.start(port);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 20
	}
];
