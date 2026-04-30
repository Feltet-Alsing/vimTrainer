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
		content: 'const lastName = "Doe";\nconst firstName = "John";',
		facit: 'const firstName = "John";\nconst lastName = "Doe";',
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
		content: 'greet("World");\nfunction greet(name) {\n\tconsole.log(`Hello ${name}`);\n}',
		facit: 'function greet(name) {\n\tconsole.log(`Hello ${name}`);\n}\ngreet("World");',
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
			'module.exports = calculator;\nfunction calculator(a, b) {\n\treturn { add: a + b, multiply: a * b };\n}',
		facit:
			'function calculator(a, b) {\n\treturn { add: a + b, multiply: a * b };\n}\nmodule.exports = calculator;',
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
			'export { helper };\n\nfunction helper() {\n\treturn "help";\n}\n\nfunction main() {\n\treturn helper();\n}',
		facit:
			'function helper() {\n\treturn "help";\n}\n\nfunction main() {\n\treturn helper();\n}\n\nexport { helper };',
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
			'const id = user.id;\nconst username = user.name;\nconst email = user.email;\nreturn {\n\tid,\n\tusername,\n\temail\n};',
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
			'function main() {\n\tconst data = getData();\n\treturn processResult(data);\n}\n\nfunction getData() {\n\treturn fetchFromAPI();\n}\n\nfunction fetchFromAPI() {\n\treturn { items: [1, 2, 3] };\n}',
		facit:
			'function fetchFromAPI() {\n\treturn { items: [1, 2, 3] };\n}\n\nfunction getData() {\n\treturn fetchFromAPI();\n}\n\nfunction main() {\n\tconst data = getData();\n\treturn processResult(data);\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 14
	},
	{
		content:
			'async function main() {\n\tawait processData();\n\tawait validateData();\n\tawait fetchData();\n}',
		facit:
			'async function main() {\n\tawait fetchData();\n\tawait validateData();\n\tawait processData();\n}',
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
			'export default class DataService {\n\tgetData() {\n\t\treturn this.fetch();\n\t}\n\n\tdeleteData() {\n\t\treturn this.remove();\n\t}\n\n\tcreateData() {\n\t\treturn this.save();\n\t}\n}',
		facit:
			'export default class DataService {\n\tcreateData() {\n\t\treturn this.save();\n\t}\n\n\tgetData() {\n\t\treturn this.fetch();\n\t}\n\n\tdeleteData() {\n\t\treturn this.remove();\n\t}\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 17
	},
	{
		content:
			'const user = {\n\temail: userEmail,\n\tname: userName,\n\tid: userId,\n\trole: userRole\n};\nconst userId = 1;\nconst userName = "John";\nconst userEmail = "john@example.com";\nconst userRole = "admin";',
		facit:
			'const userId = 1;\nconst userName = "John";\nconst userEmail = "john@example.com";\nconst userRole = "admin";\nconst user = {\n\tid: userId,\n\tname: userName,\n\temail: userEmail,\n\trole: userRole\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 18
	},
	{
		content:
			'pipeline.addStep(errorHandler);\npipeline.addStep(formatter);\npipeline.addStep(validator);\npipeline.addStep(parser);\npipeline.addStep(logger);',
		facit:
			'pipeline.addStep(logger);\npipeline.addStep(parser);\npipeline.addStep(validator);\npipeline.addStep(formatter);\npipeline.addStep(errorHandler);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 19
	},
	{
		content:
			'const server = createServer(config);\nconst config = buildConfig();\nconst options = getOptions();\n\nserver.start(port);\nconst port = 3000;',
		facit:
			'const options = getOptions();\nconst config = buildConfig();\nconst port = 3000;\nconst server = createServer(config);\n\nserver.start(port);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 20
	}
];
