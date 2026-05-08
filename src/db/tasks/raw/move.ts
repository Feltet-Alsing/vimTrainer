import { difficulty, type } from '../types';

export const move = [
	// Easy - Simple two-line swaps with clear dependency
	{
		content: 'console.log(result);\nconst result = 42;',
		facit: 'const result = 42;\nconsole.log(result);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 1
	},
	{
		content: 'return total;\nconst total = a + b;',
		facit: 'const total = a + b;\nreturn total;',
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
		content: 'api.send(request);\nconst request = buildRequest();',
		facit: 'const request = buildRequest();\napi.send(request);',
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
		content: 'renderComponent(config);\nconst config = loadConfig();',
		facit: 'const config = loadConfig();\nrenderComponent(config);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 7
	},
	{
		content: 'return response.json();\nconst response = await fetch(url);',
		facit: 'const response = await fetch(url);\nreturn response.json();',
		type: type.move,
		difficulty: difficulty.easy,
		id: 8
	},
	{
		content: 'app.use(router);\nconst router = express.Router();',
		facit: 'const router = express.Router();\napp.use(router);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 9
	},
	{
		content: 'emit("update", data);\nconst data = { status: "ready" };',
		facit: 'const data = { status: "ready" };\nemit("update", data);',
		type: type.move,
		difficulty: difficulty.easy,
		id: 10
	},

	// Medium - Three-line dependency chains
	{
		content:
			'const fullName = first + last;\nconst last = first.toUpperCase();\nconst first = "John";',
		facit:
			'const first = "John";\nconst last = first.toUpperCase();\nconst fullName = first + last;',
		type: type.move,
		difficulty: difficulty.medium,
		id: 11
	},
	{
		content: 'const area = width * height;\nconst height = width * 2;\nconst width = 10;',
		facit: 'const width = 10;\nconst height = width * 2;\nconst area = width * height;',
		type: type.move,
		difficulty: difficulty.medium,
		id: 12
	},
	{
		content:
			'const url = protocol + domain;\nconst domain = base + ".com";\nconst base = protocol.slice(0, 5);\nconst protocol = "https://";',
		facit:
			'const protocol = "https://";\nconst base = protocol.slice(0, 5);\nconst domain = base + ".com";\nconst url = protocol + domain;',
		type: type.move,
		difficulty: difficulty.medium,
		id: 13
	},
	{
		content: 'const total = subtotal + tax;\nconst tax = subtotal * 0.1;\nconst subtotal = 100;',
		facit: 'const subtotal = 100;\nconst tax = subtotal * 0.1;\nconst total = subtotal + tax;',
		type: type.move,
		difficulty: difficulty.medium,
		id: 14
	},
	{
		content:
			'class Counter {\n\tconstructor() {\n\t\tthis.count = initialValue;\n\t}\n}\nconst initialValue = 0;',
		facit:
			'const initialValue = 0;\nclass Counter {\n\tconstructor() {\n\t\tthis.count = initialValue;\n\t}\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 15
	},
	{
		content: 'const doubled = numbers.map(x => x * 2);\nconst numbers = [1, 2, 3];',
		facit: 'const numbers = [1, 2, 3];\nconst doubled = numbers.map(x => x * 2);',
		type: type.move,
		difficulty: difficulty.medium,
		id: 16
	},
	{
		content: 'const server = createServer(port);\nconst port = 8080;',
		facit: 'const port = 8080;\nconst server = createServer(port);',
		type: type.move,
		difficulty: difficulty.medium,
		id: 17
	},
	{
		content:
			'const greeting = `Hello, ${name}!`;\nconst name = user.name;\nconst user = { name: "Alice" };',
		facit:
			'const user = { name: "Alice" };\nconst name = user.name;\nconst greeting = `Hello, ${name}!`;',
		type: type.move,
		difficulty: difficulty.medium,
		id: 18
	},
	{
		content:
			'const handler = {\n\tonClick: () => doAction(target)\n};\nconst target = document.body;',
		facit:
			'const target = document.body;\nconst handler = {\n\tonClick: () => doAction(target)\n};',
		type: type.move,
		difficulty: difficulty.medium,
		id: 19
	},
	{
		content: 'const endpoint = baseUrl + "/users";\nconst baseUrl = "https://api.example.com";',
		facit: 'const baseUrl = "https://api.example.com";\nconst endpoint = baseUrl + "/users";',
		type: type.move,
		difficulty: difficulty.medium,
		id: 20
	},

	// Hard - Complex multi-line dependency chains
	{
		content: 'const result = a + b + c;\nconst c = b + 10;\nconst b = a + 10;\nconst a = 10;',
		facit: 'const a = 10;\nconst b = a + 10;\nconst c = b + 10;\nconst result = a + b + c;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 21
	},
	{
		content:
			'const display = firstName + middleName + lastName;\nconst lastName = middleName + "Smith";\nconst middleName = firstName + " M. ";\nconst firstName = "John";',
		facit:
			'const firstName = "John";\nconst middleName = firstName + " M. ";\nconst lastName = middleName + "Smith";\nconst display = firstName + middleName + lastName;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 22
	},
	{
		content:
			'const final = initial + multiplier + offset;\nconst offset = multiplier + 5;\nconst multiplier = initial * 2;\nconst initial = 10;',
		facit:
			'const initial = 10;\nconst multiplier = initial * 2;\nconst offset = multiplier + 5;\nconst final = initial + multiplier + offset;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 23
	},
	{
		content:
			'const path = root + sep + folder + file;\nconst file = folder + "/data.txt";\nconst folder = sep + "documents";\nconst sep = root + "/";\nconst root = "/home";',
		facit:
			'const root = "/home";\nconst sep = root + "/";\nconst folder = sep + "documents";\nconst file = folder + "/data.txt";\nconst path = root + sep + folder + file;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 24
	},
	{
		content:
			'const summary = title + description;\nconst description = content.slice(len);\nconst len = content.length - 100;\nconst content = title + " is a long text...";\nconst title = "Summary";',
		facit:
			'const title = "Summary";\nconst content = title + " is a long text...";\nconst len = content.length - 100;\nconst description = content.slice(len);\nconst summary = title + description;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 25
	},
	{
		content:
			'const formatted = prefix + value + suffix;\nconst suffix = value + "]";\nconst value = prefix + "data";\nconst prefix = "[";',
		facit:
			'const prefix = "[";\nconst value = prefix + "data";\nconst suffix = value + "]";\nconst formatted = prefix + value + suffix;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 26
	},
	{
		content:
			'const output = transform(input);\nconst input = normalize(raw);\nconst raw = " hello ";',
		facit:
			'const raw = " hello ";\nconst input = normalize(raw);\nconst output = transform(input);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 27
	},
	{
		content:
			'const result = step3;\nconst step3 = step2 * 2;\nconst step2 = step1 + 5;\nconst step1 = 10;',
		facit:
			'const step1 = 10;\nconst step2 = step1 + 5;\nconst step3 = step2 * 2;\nconst result = step3;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 28
	},
	{
		content:
			'class EventBus {\n\tconstructor() {\n\t\tthis.events = eventStore;\n\t}\n\temit(name) {\n\t\treturn this.events[name];\n\t}\n}\nconst eventStore = {};\nconst bus = new EventBus();',
		facit:
			'const eventStore = {};\nclass EventBus {\n\tconstructor() {\n\t\tthis.events = eventStore;\n\t}\n\temit(name) {\n\t\treturn this.events[name];\n\t}\n}\nconst bus = new EventBus();',
		type: type.move,
		difficulty: difficulty.hard,
		id: 29
	},
	{
		content:
			'const final = formatted + "!!";\nconst formatted = upper.trim();\nconst upper = lower.toUpperCase();\nconst lower = text.toLowerCase();\nconst text = raw.slice(1);\nconst raw = " HeLLo ";',
		facit:
			'const raw = " HeLLo ";\nconst text = raw.slice(1);\nconst lower = text.toLowerCase();\nconst upper = lower.toUpperCase();\nconst formatted = upper.trim();\nconst final = formatted + "!!";',
		type: type.move,
		difficulty: difficulty.hard,
		id: 30
	},
	{
		content:
			'const htmlTag = opening + content + closing;\nconst closing = content + `</${tag}>`;\nconst content = opening + "Hello";\nconst opening = `<${tag}>`;\nconst tag = "div";',
		facit:
			'const tag = "div";\nconst opening = `<${tag}>`;\nconst content = opening + "Hello";\nconst closing = content + `</${tag}>`;\nconst htmlTag = opening + content + closing;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 31
	},
	{
		content:
			'const query = base + params;\nconst params = data + "?name=test";\nconst data = keys + "&id=1";\nconst keys = base + "key";\nconst base = "/api/users";',
		facit:
			'const base = "/api/users";\nconst keys = base + "key";\nconst data = keys + "&id=1";\nconst params = data + "?name=test";\nconst query = base + params;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 32
	},
	{
		content:
			'const total = price + shipping + tax;\nconst tax = shipping * 0.08;\nconst shipping = price + 10;\nconst price = 100;',
		facit:
			'const price = 100;\nconst shipping = price + 10;\nconst tax = shipping * 0.08;\nconst total = price + shipping + tax;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 33
	},
	{
		content:
			'const connection = protocol + host + port + path;\nconst path = resource + "/data";\nconst resource = port + "/users";\nconst port = host + ":8080";\nconst host = protocol + "//api.example.com";\nconst protocol = "https:";',
		facit:
			'const protocol = "https:";\nconst host = protocol + "//api.example.com";\nconst port = host + ":8080";\nconst resource = port + "/users";\nconst path = resource + "/data";\nconst connection = protocol + host + port + path;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 34
	},
	{
		content:
			'const step6 = step5.toUpperCase();\nconst step5 = step4.trim();\nconst step4 = step3 + "!";\nconst step3 = step2.toLowerCase();\nconst step2 = step1.slice(1);\nconst step1 = " HELLO";',
		facit:
			'const step1 = " HELLO";\nconst step2 = step1.slice(1);\nconst step3 = step2.toLowerCase();\nconst step4 = step3 + "!";\nconst step5 = step4.trim();\nconst step6 = step5.toUpperCase();',
		type: type.move,
		difficulty: difficulty.hard,
		id: 35
	},
	{
		content:
			'const result = multiply(doubled);\nconst doubled = squared * 2;\nconst squared = base * base;\nconst base = initial + 5;\nconst initial = 3;',
		facit:
			'const initial = 3;\nconst base = initial + 5;\nconst squared = base * base;\nconst doubled = squared * 2;\nconst result = multiply(doubled);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 36
	},
	{
		content:
			'const output = process(cleaned);\nconst cleaned = input.trim().toLowerCase();\nconst input = suffix + raw;\nconst suffix = raw.slice(0, 1);\nconst raw = " Hello ";',
		facit:
			'const raw = " Hello ";\nconst suffix = raw.slice(0, 1);\nconst input = suffix + raw;\nconst cleaned = input.trim().toLowerCase();\nconst output = process(cleaned);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 37
	},
	{
		content:
			'const result = calc(final);\nconst final = intermediate + delta;\nconst delta = factor + 10;\nconst intermediate = factor * initial;\nconst factor = initial + 2;\nconst initial = 5;',
		facit:
			'const initial = 5;\nconst factor = initial + 2;\nconst intermediate = factor * initial;\nconst delta = factor + 10;\nconst final = intermediate + delta;\nconst result = calc(final);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 38
	},
	{
		content:
			'const display = prefix + formatted + suffix;\nconst suffix = formatted + "]";\nconst formatted = value.toUpperCase();\nconst value = cleaned.trim();\nconst cleaned = prefix.toLowerCase();\nconst prefix = " Test ";',
		facit:
			'const prefix = " Test ";\nconst cleaned = prefix.toLowerCase();\nconst value = cleaned.trim();\nconst formatted = value.toUpperCase();\nconst suffix = formatted + "]";\nconst display = prefix + formatted + suffix;',
		type: type.move,
		difficulty: difficulty.hard,
		id: 39
	},
	{
		content:
			'const final = transform(processed);\nconst processed = normalize(validated);\nconst validated = validate(sanitized);\nconst sanitized = clean(input);\nconst input = raw.trim();\nconst raw = " data ";',
		facit:
			'const raw = " data ";\nconst input = raw.trim();\nconst sanitized = clean(input);\nconst validated = validate(sanitized);\nconst processed = normalize(validated);\nconst final = transform(processed);',
		type: type.move,
		difficulty: difficulty.hard,
		id: 40
	}
];
