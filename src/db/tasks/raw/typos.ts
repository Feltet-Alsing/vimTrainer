import { difficulty, type } from '../types';

export const typos = [
	{
		content: 'cosnt API_KEY = "abc123";',
		facit: 'const API_KEY = "abc123";',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 1
	},
	{
		content: 'if (user.isActive === treu) {\n\treturn user.name;\n}',
		facit: 'if (user.isActive === true) {\n\treturn user.name;\n}',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 2
	},
	{
		content: 'cosole.log("Server started on port 3000");',
		facit: 'console.log("Server started on port 3000");',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 3
	},
	{
		content:
			'fucntion calculateTotal(items) {\n\treturn items.reduce((sum, item) => sum + item.price, 0);\n}',
		facit:
			'function calculateTotal(items) {\n\treturn items.reduce((sum, item) => sum + item.price, 0);\n}',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 4
	},
	{
		content: 'if (data.lenght > 0) {\n\tprocessData(data);\n}',
		facit: 'if (data.length > 0) {\n\tprocessData(data);\n}',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 5
	},
	{
		content: 'const userEmail = user?.emial || "no-email@example.com";',
		facit: 'const userEmail = user?.email || "no-email@example.com";',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 6
	},
	{
		content: 'exprot default function HomePage() {\n\treturn <div>Welcome</div>;\n}',
		facit: 'export default function HomePage() {\n\treturn <div>Welcome</div>;\n}',
		type: type.typo,
		difficulty: difficulty.easy,
		id: 7
	},

	// Medium typos - slightly harder to spot or multiple words
	{
		content:
			'aysnc function fetchUserData(userId) {\n\tconst response = await fetch(`/api/users/${userId}`);\n\treturn response.json();\n}',
		facit:
			'async function fetchUserData(userId) {\n\tconst response = await fetch(`/api/users/${userId}`);\n\treturn response.json();\n}',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 8
	},
	{
		content: 'if (typeof value === "udnefined") {\n\treturn null;\n}',
		facit: 'if (typeof value === "undefined") {\n\treturn null;\n}',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 9
	},
	{
		content: 'const handleClick = (evnet) => {\n\tevnet.preventDefault();\n\tsubmitForm();\n};',
		facit: 'const handleClick = (event) => {\n\tevent.preventDefault();\n\tsubmitForm();\n};',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 10
	},
	{
		content:
			'async function getData() {\n\tconst res = awiat fetch("/api/data");\n\treturn res.json();\n}',
		facit:
			'async function getData() {\n\tconst res = await fetch("/api/data");\n\treturn res.json();\n}',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 11
	},
	{
		content:
			'improt { useState, useEffect } from "react";\n\nfunction Component() {\n\tconst [count, setCount] = useState(0);\n}',
		facit:
			'import { useState, useEffect } from "react";\n\nfunction Component() {\n\tconst [count, setCount] = useState(0);\n}',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 12
	},
	{
		content: 'users.forEahc(user => {\n\tconsole.log(user.name);\n});',
		facit: 'users.forEach(user => {\n\tconsole.log(user.name);\n});',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 13
	},
	{
		content: 'documnet.getElementById("app").addEventListener("click", handleClick);',
		facit: 'document.getElementById("app").addEventListener("click", handleClick);',
		type: type.typo,
		difficulty: difficulty.medium,
		id: 14
	},

	// Hard typos - Complex selection challenges requiring advanced Vim motions
	{
		content: 'const us\'er = "John";',
		facit: 'const user = "John";',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 15
	},
	{
		content: "if (data.le'ngth > 0) {\n\treturn true;\n}",
		facit: 'if (data.length > 0) {\n\treturn true;\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 16
	},
	{
		content: "function ca'lculate(x, y) {\n\treturn x + y;\n}",
		facit: 'function calculate(x, y) {\n\treturn x + y;\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 17
	},
	{
		content: 'const message = "Hel\'lo World";',
		facit: 'const message = "Hello World";',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 18
	},
	{
		content: 'const obj = { na\'me: "test", age: 30 };',
		facit: 'const obj = { name: "test", age: 30 };',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 19
	},
	{
		content: "async function fet'chData(url) {\n\treturn await fetch(url);\n}",
		facit: 'async function fetchData(url) {\n\treturn await fetch(url);\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 20
	},
	{
		content: "const arr = [1, 2, 3'];",
		facit: 'const arr = [1, 2, 3];',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 21
	},
	{
		content: 'return user.em\'ail || "no-email";',
		facit: 'return user.email || "no-email";',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 22
	},
	{
		content: 'const config = { po\'rt: 3000, host: "localhost" };',
		facit: 'const config = { port: 3000, host: "localhost" };',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 23
	},
	{
		content: 'console.log("Er\'ror:", error.message);',
		facit: 'console.log("Error:", error.message);',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 24
	},
	{
		content: "if (res'ponse.ok) {\n\treturn response.json();\n}",
		facit: 'if (response.ok) {\n\treturn response.json();\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 25
	},
	{
		content: "const handleCl'ick = (event) => {\n\tevent.preventDefault();\n};",
		facit: 'const handleClick = (event) => {\n\tevent.preventDefault();\n};',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 26
	},
	{
		content: "export default fu'nction App() {\n\treturn <div>Hello</div>;\n}",
		facit: 'export default function App() {\n\treturn <div>Hello</div>;\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 27
	},
	{
		content: "const value = parseInt(st'ring, 10);",
		facit: 'const value = parseInt(string, 10);',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 28
	},
	{
		content: 'return { sta\'tus: "ok", code: 200 };',
		facit: 'return { status: "ok", code: 200 };',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 29
	},
	{
		content: 'const result = await api.ge\'t("/users");',
		facit: 'const result = await api.get("/users");',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 30
	},
	{
		content: "if (condition && isVa'lid) {\n\tprocess();\n}",
		facit: 'if (condition && isValid) {\n\tprocess();\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 31
	},
	{
		content: "const title = `Welc'ome ${name}`;",
		facit: 'const title = `Welcome ${name}`;',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 32
	},
	{
		content: "class User'Service {\n\tconstructor() {}\n}",
		facit: 'class UserService {\n\tconstructor() {}\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 33
	},
	{
		content: "const handler = { onCli'ck: () => {} };",
		facit: 'const handler = { onClick: () => {} };',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 34
	},
	{
		content: "return items.fi'lter(x => x.active);",
		facit: 'return items.filter(x => x.active);',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 35
	},
	{
		content: 'const isActi\'ve = user.status === "active";',
		facit: 'const isActive = user.status === "active";',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 36
	},
	{
		content: "async function validate(da'ta) {\n\treturn data.length > 0;\n}",
		facit: 'async function validate(data) {\n\treturn data.length > 0;\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 37
	},
	{
		content: 'const endpoint = "/api/use\'rs/profile";',
		facit: 'const endpoint = "/api/users/profile";',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 38
	},
	{
		content: "if (error.mes'sage) {\n\tconsole.error(error.message);\n}",
		facit: 'if (error.message) {\n\tconsole.error(error.message);\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 39
	},
	{
		content: "const total = items.red'uce((sum, x) => sum + x, 0);",
		facit: 'const total = items.reduce((sum, x) => sum + x, 0);',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 40
	}
];
