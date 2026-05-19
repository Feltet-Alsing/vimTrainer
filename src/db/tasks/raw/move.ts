import { difficulty, type } from '../types';

export const move = [
	{
		content: 'console.log(result);\nconst result = 42;',
		facit: 'const result = 42;\nconsole.log(result);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 1
	},
	{
		content: 'console.log(message);\nconst message = "Hello World";',
		facit: 'const message = "Hello World";\nconsole.log(message);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 2
	},
	{
		content: 'return response.json();\nconst response = await fetch("/api/data");',
		facit: 'const response = await fetch("/api/data");\nreturn response.json();',
		type: type.move,
		difficulty: difficulty.easy,
		id: 3
	},
	{
		content: 'db.insert(record);\nconst record = { id: 1, name: "Test" };',
		facit: 'const record = { id: 1, name: "Test" };\ndb.insert(record);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 4
	},
	{
		content: 'if (return true) {\n\t1 === 1\n}',
		facit: 'if (1 === 1) {\n\treturn true;\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 5
	},
	{
		content: 'function calculate({\n\treturn x + y;\n}) x, y',
		facit: 'function calculate(x, y) {\n\treturn x + y;\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 6
	},
	{
		content:
			'const data = fetchData();\ntry {\n\tconst result = processData(data);\n} catch (error) {\n\tconsole.error(error);\n}\nconsole.log(result);',
		facit:
			'const data = fetchData();\ntry {\n\tconst result = processData(data);\n\tconsole.log(result);\n} catch (error) {\n\tconsole.error(error);\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 7
	},
	{
		content: 'function add() {\n  \n}\nconst a = 2;\nconst b = 3;\nreturn a + b;',
		facit: 'function add() {\n\tconst a = 2;\n\tconst b = 3;\n\treturn a + b;\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 8
	},
	{
		content:
			'function loop(arr) {\n\n}\nlet total = 0;\nfor (let i = 0; i < arr.length; i++) {\n\ttotal += arr[i];\n}\nreturn total;',
		facit:
			'function loop(arr) {\n\tlet total = 0;\n\tfor (let i = 0; i < arr.length; i++) {\n\t\ttotal += arr[i];\n\t}\n\treturn total;\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 9
	},
	{
		content:
			'class User {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t}\n}\ngetName() {\n\treturn this.name;\n}',
		facit:
			'class User {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t}\n\tgetName() {\n\t\treturn this.name;\n\t}\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 10
	},
	{
		content:
			'try {\n\tconst data = await fetchData();\n\tprocessData(data);\n} catch (error) {\n\t\n}\nconsole.error(error);\nlogError(error);',
		facit:
			'try {\n\tconst data = await fetchData();\n\tprocessData(data);\n} catch (error) {\n\tconsole.error(error);\n\tlogError(error);\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 11
	},
	{
		content:
			'const config = {\n\tport: 3000,\n\thost: "localhost"\n};\ngetDatabase() {\n\treturn this.db;\n}\nsetDatabase(db) {\n\tthis.db = db;\n}',
		facit:
			'const config = {\n\tport: 3000,\n\thost: "localhost",\n\tgetDatabase() {\n\t\treturn this.db;\n\t},\n\tsetDatabase(db) {\n\t\tthis.db = db;\n\t}\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 12
	},
	{
		content:
			'const handler = {\n\tonClick: function() {\n\t\tconsole.log("Clicked");\n\t}\n};\nclickOnHover: function() {\n\tif (handler.hovered) {\n\t\thandler.onClick();\n\t}\n}',
		facit:
			'const handler = {\n\tonClick: function() {\n\t\tconsole.log("Clicked");\n\t},\n\tclickOnHover: function() {\n\t\tif (handler.hovered) {\n\t\t\thandler.onClick();\n\t\t}\n\t}\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 13
	},
	{
		content:
			'const items = [1, 2, 3];\nconst result = items.map(item => {\n\treturn item * 2;\n});\nconsole.log(item);',
		facit:
			'const items = [1, 2, 3];\nconst result = items.map(item => {\n\tconsole.log(item);\n\treturn item * 2;\n});',
		type: type.move,
		difficulty: difficulty.medium,
		id: 14
	},
	{
		content:
			'async function process() {\n\n}\nconst data = await fetchData();\nawait saveData(data);\nreturn data;',
		facit:
			'async function process() {\n\tconst data = await fetchData();\n\tawait saveData(data);\n\treturn data;\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 15
	},
	{
		content:
			'const api = {\n\tbaseUrl: "/api"\n};\nrequest(endpoint) {\n\treturn fetch(this.baseUrl + endpoint);\n}\nparse(response) {\n\treturn response.json();\n}',
		facit:
			'const api = {\n\tbaseUrl: "/api",\n\trequest(endpoint) {\n\t\treturn fetch(this.baseUrl + endpoint);\n\t},\n\tparse(response) {\n\t\treturn response.json();\n\t}\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 16
	},
	{
		content: 'process(value);\nconst value = getValue();',
		facit: 'const value = getValue();\nprocess(value);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 17
	},
	{
		content:
			'class Calculator {\n\tconstructor() {\n\t\tthis.result = 0;\n\t}\n}\nadd(x, y) {\n\treturn x + y;\n}\nmultiply(x, y) {\n\treturn x * y;\n}',
		facit:
			'class Calculator {\n\tconstructor() {\n\t\tthis.result = 0;\n\t}\n\tadd(x, y) {\n\t\treturn x + y;\n\t}\n\tmultiply(x, y) {\n\t\treturn x * y;\n\t}\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 18
	},
	{
		content:
			'if (isReady) {\n\tconsole.log("Ready");\n}\nif (user) {\n\n}\nconst isValid = user.verified;\nsendNotification(user);',
		facit:
			'if (isReady) {\n\tconsole.log("Ready");\n}\nif (user) {\n\tconst isValid = user.verified;\n\tsendNotification(user);\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 19
	},
	{
		content:
			'for (let i = 0; i < items.length; i++) {\n\tconst item = items[i];\n}\nif (item.active) {\n\tprocess(item);\n}',
		facit:
			'for (let i = 0; i < items.length; i++) {\n\tconst item = items[i];\n\tif (item.active) {\n\t\tprocess(item);\n\t}\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 20
	}
];
