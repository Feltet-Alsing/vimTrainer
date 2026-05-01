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

	// Medium - Move into functions/blocks or multi-line reordering
	{
		content: 'function greet() {\n\treturn `Hello ${name}`;\n}\nconst name = "World";',
		facit: 'function greet() {\n\tconst name = "World";\n\treturn `Hello ${name}`;\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 11
	},
	{
		content: 'function calculate() {\n\treturn x + y;\n}\nconst x = 10;\nconst y = 20;',
		facit: 'function calculate() {\n\tconst x = 10;\n\tconst y = 20;\n\treturn x + y;\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 12
	},
	{
		content:
			'const user = {\n\tgetName: () => firstName + " " + lastName\n};\nconst firstName = "John";\nconst lastName = "Doe";',
		facit:
			'const firstName = "John";\nconst lastName = "Doe";\nconst user = {\n\tgetName: () => firstName + " " + lastName\n};',
		type: type.move,
		difficulty: difficulty.medium,
		id: 13
	},
	{
		content:
			'if (condition) {\n\tconsole.log(message);\n}\nconst message = "Error";\nconst condition = false;',
		facit:
			'const condition = false;\nconst message = "Error";\nif (condition) {\n\tconsole.log(message);\n}',
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
		content:
			'async function fetchUser() {\n\treturn await fetch(apiUrl);\n}\nconst apiUrl = "/api/user";',
		facit:
			'async function fetchUser() {\n\tconst apiUrl = "/api/user";\n\treturn await fetch(apiUrl);\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 16
	},
	{
		content:
			'const config = {\n\thost: HOST,\n\tport: PORT\n};\nconst HOST = "localhost";\nconst PORT = 3000;',
		facit:
			'const HOST = "localhost";\nconst PORT = 3000;\nconst config = {\n\thost: HOST,\n\tport: PORT\n};',
		type: type.move,
		difficulty: difficulty.medium,
		id: 17
	},
	{
		content:
			'function process() {\n\treturn transform(data);\n}\nconst data = [1, 2, 3];\nfunction transform(arr) {\n\treturn arr.map(x => x * 2);\n}',
		facit:
			'function transform(arr) {\n\treturn arr.map(x => x * 2);\n}\nfunction process() {\n\tconst data = [1, 2, 3];\n\treturn transform(data);\n}',
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
		content:
			'export function init() {\n\tapp.start(port);\n}\nconst port = 8080;\nconst app = createApp();',
		facit:
			'const app = createApp();\nconst port = 8080;\nexport function init() {\n\tapp.start(port);\n}',
		type: type.move,
		difficulty: difficulty.medium,
		id: 20
	},

	// Hard - Complex multi-block reordering and moving into nested structures
	{
		content:
			'function createUser() {\n\treturn {\n\t\tid: userId,\n\t\tname: userName,\n\t\temail: userEmail\n\t};\n}\nconst userId = 1;\nconst userName = "Alice";\nconst userEmail = "alice@example.com";',
		facit:
			'function createUser() {\n\tconst userId = 1;\n\tconst userName = "Alice";\n\tconst userEmail = "alice@example.com";\n\treturn {\n\t\tid: userId,\n\t\tname: userName,\n\t\temail: userEmail\n\t};\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 21
	},
	{
		content:
			'class Database {\n\tconnect() {\n\t\treturn connect(this.url);\n\t}\n}\nconst db = new Database();\nfunction connect(url) {\n\treturn `Connected to ${url}`;\n}\nDatabase.prototype.url = "localhost";',
		facit:
			'function connect(url) {\n\treturn `Connected to ${url}`;\n}\nclass Database {\n\tconnect() {\n\t\treturn connect(this.url);\n\t}\n}\nDatabase.prototype.url = "localhost";\nconst db = new Database();',
		type: type.move,
		difficulty: difficulty.hard,
		id: 22
	},
	{
		content:
			'async function init() {\n\tconst result = await fetchData(url);\n\treturn result;\n}\nconst url = buildUrl(config);\nfunction buildUrl(cfg) {\n\treturn `${cfg.host}:${cfg.port}`;\n}\nconst config = { host: "localhost", port: 3000 };',
		facit:
			'const config = { host: "localhost", port: 3000 };\nfunction buildUrl(cfg) {\n\treturn `${cfg.host}:${cfg.port}`;\n}\nconst url = buildUrl(config);\nasync function init() {\n\tconst result = await fetchData(url);\n\treturn result;\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 23
	},
	{
		content:
			'const app = {\n\tstart: () => server.listen(PORT),\n\tstop: () => server.close()\n};\nconst PORT = 3000;\nconst server = createServer();\nfunction createServer() {\n\treturn { listen: () => {}, close: () => {} };\n}',
		facit:
			'const PORT = 3000;\nfunction createServer() {\n\treturn { listen: () => {}, close: () => {} };\n}\nconst server = createServer();\nconst app = {\n\tstart: () => server.listen(PORT),\n\tstop: () => server.close()\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 24
	},
	{
		content:
			'export { helper, main };\nconst result = main();\nfunction main() {\n\treturn helper(data);\n}\nconst data = "input";\nfunction helper(input) {\n\treturn input.toUpperCase();\n}',
		facit:
			'const data = "input";\nfunction helper(input) {\n\treturn input.toUpperCase();\n}\nfunction main() {\n\treturn helper(data);\n}\nconst result = main();\nexport { helper, main };',
		type: type.move,
		difficulty: difficulty.hard,
		id: 25
	},
	{
		content:
			'function renderApp() {\n\tconst element = createElement(tag, props);\n\treturn element;\n}\nconst tag = "div";\nconst props = { className: "app" };\nfunction createElement(t, p) {\n\treturn { type: t, props: p };\n}',
		facit:
			'function createElement(t, p) {\n\treturn { type: t, props: p };\n}\nfunction renderApp() {\n\tconst tag = "div";\n\tconst props = { className: "app" };\n\tconst element = createElement(tag, props);\n\treturn element;\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 26
	},
	{
		content:
			'const middleware = {\n\tvalidate: (req) => checker(req, rules)\n};\nconst rules = { required: true };\nfunction checker(request, r) {\n\treturn r.required && request.body;\n}',
		facit:
			'function checker(request, r) {\n\treturn r.required && request.body;\n}\nconst rules = { required: true };\nconst middleware = {\n\tvalidate: (req) => checker(req, rules)\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 27
	},
	{
		content:
			'async function loadData() {\n\tconst response = await api.get(endpoint);\n\treturn parse(response);\n}\nconst endpoint = "/api/data";\nconst api = createClient(baseUrl);\nfunction parse(res) {\n\treturn res.json();\n}\nconst baseUrl = "https://api.example.com";',
		facit:
			'const baseUrl = "https://api.example.com";\nconst api = createClient(baseUrl);\nconst endpoint = "/api/data";\nfunction parse(res) {\n\treturn res.json();\n}\nasync function loadData() {\n\tconst response = await api.get(endpoint);\n\treturn parse(response);\n}',
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
			'function buildQuery() {\n\treturn {\n\t\tselect: fields,\n\t\tfrom: table,\n\t\twhere: condition\n\t};\n}\nconst fields = ["id", "name"];\nconst table = "users";\nconst condition = "active = true";',
		facit:
			'function buildQuery() {\n\tconst fields = ["id", "name"];\n\tconst table = "users";\n\tconst condition = "active = true";\n\treturn {\n\t\tselect: fields,\n\t\tfrom: table,\n\t\twhere: condition\n\t};\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 30
	},
	{
		content:
			'const router = {\n\tget: (path) => handler(path, routes),\n\tpost: (path) => handler(path, routes)\n};\nconst routes = new Map();\nfunction handler(p, r) {\n\treturn r.get(p);\n}',
		facit:
			'const routes = new Map();\nfunction handler(p, r) {\n\treturn r.get(p);\n}\nconst router = {\n\tget: (path) => handler(path, routes),\n\tpost: (path) => handler(path, routes)\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 31
	},
	{
		content:
			'export function initApp() {\n\tsetup(config);\n\tstart(server);\n}\nconst config = loadConfig();\nconst server = createServer(port);\nfunction setup(cfg) {\n\tconsole.log("Setup", cfg);\n}\nfunction start(srv) {\n\tsrv.listen();\n}\nconst port = 3000;',
		facit:
			'const port = 3000;\nconst config = loadConfig();\nconst server = createServer(port);\nfunction setup(cfg) {\n\tconsole.log("Setup", cfg);\n}\nfunction start(srv) {\n\tsrv.listen();\n}\nexport function initApp() {\n\tsetup(config);\n\tstart(server);\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 32
	},
	{
		content:
			'const service = {\n\tfetch: async () => {\n\t\tconst res = await client.get(url);\n\t\treturn parser(res);\n\t}\n};\nconst url = "/api/v1/data";\nconst client = httpClient;\nfunction parser(response) {\n\treturn response.data;\n}\nconst httpClient = createClient();',
		facit:
			'const httpClient = createClient();\nconst client = httpClient;\nconst url = "/api/v1/data";\nfunction parser(response) {\n\treturn response.data;\n}\nconst service = {\n\tfetch: async () => {\n\t\tconst res = await client.get(url);\n\t\treturn parser(res);\n\t}\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 33
	},
	{
		content:
			'class Validator {\n\tvalidate(input) {\n\t\treturn checkRules(input, ruleSet);\n\t}\n}\nconst ruleSet = { minLength: 5, maxLength: 20 };\nfunction checkRules(val, rules) {\n\treturn val.length >= rules.minLength;\n}\nconst validator = new Validator();',
		facit:
			'const ruleSet = { minLength: 5, maxLength: 20 };\nfunction checkRules(val, rules) {\n\treturn val.length >= rules.minLength;\n}\nclass Validator {\n\tvalidate(input) {\n\t\treturn checkRules(input, ruleSet);\n\t}\n}\nconst validator = new Validator();',
		type: type.move,
		difficulty: difficulty.hard,
		id: 34
	},
	{
		content:
			'function processItems() {\n\treturn items.map(item => {\n\t\treturn transform(item, options);\n\t});\n}\nconst items = [1, 2, 3, 4, 5];\nconst options = { multiply: 2 };\nfunction transform(val, opts) {\n\treturn val * opts.multiply;\n}',
		facit:
			'const items = [1, 2, 3, 4, 5];\nconst options = { multiply: 2 };\nfunction transform(val, opts) {\n\treturn val * opts.multiply;\n}\nfunction processItems() {\n\treturn items.map(item => {\n\t\treturn transform(item, options);\n\t});\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 35
	},
	{
		content:
			'const store = {\n\tgetState: () => state,\n\tsetState: (newState) => {\n\t\tstate = validator(newState);\n\t}\n};\nlet state = initialState;\nconst initialState = { count: 0 };\nfunction validator(s) {\n\treturn s || initialState;\n}',
		facit:
			'const initialState = { count: 0 };\nlet state = initialState;\nfunction validator(s) {\n\treturn s || initialState;\n}\nconst store = {\n\tgetState: () => state,\n\tsetState: (newState) => {\n\t\tstate = validator(newState);\n\t}\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 36
	},
	{
		content:
			'async function runPipeline() {\n\tconst step1 = await first(input);\n\tconst step2 = await second(step1);\n\treturn step2;\n}\nconst input = { data: "test" };\nasync function first(data) {\n\treturn { ...data, processed: true };\n}\nasync function second(data) {\n\treturn data.processed;\n}',
		facit:
			'const input = { data: "test" };\nasync function first(data) {\n\treturn { ...data, processed: true };\n}\nasync function second(data) {\n\treturn data.processed;\n}\nasync function runPipeline() {\n\tconst step1 = await first(input);\n\tconst step2 = await second(step1);\n\treturn step2;\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 37
	},
	{
		content:
			'class Calculator {\n\tadd(a, b) {\n\t\treturn compute(a, b, operation);\n\t}\n}\nconst operation = "add";\nfunction compute(x, y, op) {\n\treturn op === "add" ? x + y : x - y;\n}\nconst calc = new Calculator();',
		facit:
			'const operation = "add";\nfunction compute(x, y, op) {\n\treturn op === "add" ? x + y : x - y;\n}\nclass Calculator {\n\tadd(a, b) {\n\t\treturn compute(a, b, operation);\n\t}\n}\nconst calc = new Calculator();',
		type: type.move,
		difficulty: difficulty.hard,
		id: 38
	},
	{
		content:
			'const controller = {\n\thandle: async (req) => {\n\t\tconst valid = await validate(req, schema);\n\t\treturn valid ? process(req) : null;\n\t}\n};\nconst schema = { type: "object" };\nasync function validate(request, s) {\n\treturn request.type === s.type;\n}\nfunction process(request) {\n\treturn { result: request };\n}',
		facit:
			'const schema = { type: "object" };\nasync function validate(request, s) {\n\treturn request.type === s.type;\n}\nfunction process(request) {\n\treturn { result: request };\n}\nconst controller = {\n\thandle: async (req) => {\n\t\tconst valid = await validate(req, schema);\n\t\treturn valid ? process(req) : null;\n\t}\n};',
		type: type.move,
		difficulty: difficulty.hard,
		id: 39
	},
	{
		content:
			'function createComponent() {\n\treturn {\n\t\trender: () => template(props),\n\t\tupdate: (newProps) => {\n\t\t\tprops = merge(props, newProps);\n\t\t}\n\t};\n}\nlet props = defaultProps;\nconst defaultProps = { title: "App" };\nfunction template(p) {\n\treturn `<div>${p.title}</div>`;\n}\nfunction merge(a, b) {\n\treturn { ...a, ...b };\n}',
		facit:
			'const defaultProps = { title: "App" };\nlet props = defaultProps;\nfunction template(p) {\n\treturn `<div>${p.title}</div>`;\n}\nfunction merge(a, b) {\n\treturn { ...a, ...b };\n}\nfunction createComponent() {\n\treturn {\n\t\trender: () => template(props),\n\t\tupdate: (newProps) => {\n\t\t\tprops = merge(props, newProps);\n\t\t}\n\t};\n}',
		type: type.move,
		difficulty: difficulty.hard,
		id: 40
	}
];
