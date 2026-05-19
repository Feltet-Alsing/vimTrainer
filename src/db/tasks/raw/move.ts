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
		content: 'return total;\nconst total = price * quantity;',
		facit: 'const total = price * quantity;\nreturn total;',
		type: type.move,
		difficulty: difficulty.easy,
		id: 2
	},
	{
		content: 'console.log(message);\nconst message = "Hello World";',
		facit: 'const message = "Hello World";\nconsole.log(message);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 3
	},
	{
		content: 'user.save();\nconst user = new User("John");',
		facit: 'const user = new User("John");\nuser.save();',
		type: type.move,
		difficulty: difficulty.easy,
		id: 4
	},
	{
		content: 'return response.json();\nconst response = await fetch("/api/data");',
		facit: 'const response = await fetch("/api/data");\nreturn response.json();',
		type: type.move,
		difficulty: difficulty.easy,
		id: 5
	},
	{
		content: 'db.insert(record);\nconst record = { id: 1, name: "Test" };',
		facit: 'const record = { id: 1, name: "Test" };\ndb.insert(record);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 6
	},
	{
		content: 'if (return true) {\n\t1 === 1\n}',
		facit: 'if (1 === 1) {\n\treturn true;\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 7
	},
	{
		content: 'function calculate({\n\treturn x + y;\n}) x, y',
		facit: 'function calculate(x, y) {\n\treturn x + y;\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 8
	},
	{
		content:
			'for (let i = 0; i < arr.length; i++) {\n\tconsole.log(arr[i]);\n}\nconst arr = [1, 2, 3];',
		facit:
			'const arr = [1, 2, 3];\nfor (let i = 0; i < arr.length; i++) {\n\tconsole.log(arr[i]);\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 9
	},
	{
		content:
			'class User {\n\tconstructor() {\n\t\tthis.role = role;\n\t}\n}\nconst role = "admin";',
		facit: 'const role = "admin";\nclass User {\n\tconstructor() {\n\t\tthis.role = role;\n\t}\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 10
	},
	{
		content:
			'const data = fetchData();\ntry {\n\tconst result = processData(data);\n} catch (error) {\n\tconsole.error(error);\n}\nconsole.log(result);',
		facit:
			'const data = fetchData();\ntry {\n\tconst result = processData(data);\n\tconsole.log(result);\n} catch (error) {\n\tconsole.error(error);\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 11
	},
	{
		content: 'render(component);\nconst component = <App />;',
		facit: 'const component = <App />;\nrender(component);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 12
	},
	{
		content: 'return sum;\nconst sum = a + b;',
		facit: 'const sum = a + b;\nreturn sum;',
		type: type.move,
		difficulty: difficulty.easy,
		id: 13
	},
	{
		content: 'socket.send(payload);\nconst payload = JSON.stringify(data);',
		facit: 'const payload = JSON.stringify(data);\nsocket.send(payload);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 14
	},
	{
		content: 'api.post(endpoint);\nconst endpoint = "/api/users";',
		facit: 'const endpoint = "/api/users";\napi.post(endpoint);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 15
	},
	{
		content: 'setState(newValue);\nconst newValue = count + 1;',
		facit: 'const newValue = count + 1;\nsetState(newValue);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 16
	},
	{
		content: 'cache.set(key, value);\nconst key = "user_123";',
		facit: 'const key = "user_123";\ncache.set(key, value);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 17
	},
	{
		content: 'while (hasNext) {\n\tprocess();\n}\nconst hasNext = queue.length > 0;',
		facit: 'const hasNext = queue.length > 0;\nwhile (hasNext) {\n\tprocess();\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 18
	},
	{
		content: 'if (count > 10) {\n\treset();\n}\nconst count = items.length;',
		facit: 'const count = items.length;\nif (count > 10) {\n\treset();\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 19
	},
	{
		content: 'function init({\n\tconsole.log(config);\n}) config',
		facit: 'function init(config) {\n\tconsole.log(config);\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 20
	},
	{
		content: 'arr.forEach(item => {\n\tconsole.log(item);\n});\nconst arr = [1, 2, 3];',
		facit: 'const arr = [1, 2, 3];\narr.forEach(item => {\n\tconsole.log(item);\n});',
		type: type.move,
		difficulty: difficulty.medium,
		id: 21
	},
	{
		content:
			'try {\n\tawait saveData(info);\n\treturn true;\n} catch (error) {\n\tconsole.error(error);\n}\nconst info = getUserInfo();',
		facit:
			'const info = getUserInfo();\ntry {\n\tawait saveData(info);\n\treturn true;\n} catch (error) {\n\tconsole.error(error);\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 22
	}
];
