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

	// Hard typos - multiple typos or subtle mistakes
	{
		content:
			'fucntion validateUser(data) {\n\tif (data.usrename.lenght < 3) {\n\t\tretrun false;\n\t}\n\treturn true;\n}',
		facit:
			'function validateUser(data) {\n\tif (data.username.length < 3) {\n\t\treturn false;\n\t}\n\treturn true;\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 15
	},
	{
		content:
			'try {\n\tconst data = awiat fecth("/api/users");\n\tcosole.log(data);\n} cathc (error) {\n\tconsole.error(error);\n}',
		facit:
			'try {\n\tconst data = await fetch("/api/users");\n\tconsole.log(data);\n} catch (error) {\n\tconsole.error(error);\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 16
	},
	{
		content:
			'cosnt config = {\n\tapiUrl: "https://api.exmaple.com",\n\ttimeout: 5000,\n\tretires: 3\n};',
		facit:
			'const config = {\n\tapiUrl: "https://api.example.com",\n\ttimeout: 5000,\n\tretries: 3\n};',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 17
	},
	{
		content:
			'clsas UserService {\n\tconstrucor(apiClient) {\n\t\tthis.client = apiClient;\n\t}\n\n\tasync getUser(id) {\n\t\tretrun this.client.get(`/users/${id}`);\n\t}\n}',
		facit:
			'class UserService {\n\tconstructor(apiClient) {\n\t\tthis.client = apiClient;\n\t}\n\n\tasync getUser(id) {\n\t\treturn this.client.get(`/users/${id}`);\n\t}\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 18
	},
	{
		content:
			'const handleSubmti = aysnc (evnet) => {\n\tevnet.preventDefault();\n\tconst rsponse = awiat submitForm();\n\tif (rsponse.ok) {\n\t\tcosole.log("Success!");\n\t}\n};',
		facit:
			'const handleSubmit = async (event) => {\n\tevent.preventDefault();\n\tconst response = await submitForm();\n\tif (response.ok) {\n\t\tconsole.log("Success!");\n\t}\n};',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 19
	},
	{
		content:
			'exprot async fucntion serverAction(formData) {\n\t"use sever";\n\tconst name = formData.get("nmae");\n\tif (!name || name.lenght === 0) {\n\t\tthrow new Erorr("Name is required");\n\t}\n}',
		facit:
			'export async function serverAction(formData) {\n\t"use server";\n\tconst name = formData.get("name");\n\tif (!name || name.length === 0) {\n\t\tthrow new Error("Name is required");\n\t}\n}',
		type: type.typo,
		difficulty: difficulty.hard,
		id: 20
	}
];
