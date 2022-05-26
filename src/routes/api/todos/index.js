export async function get({ params }) {
	// get todos from database using an ORM like Prisma
	const todos = [
		{ id: 1, title: 'Finish Svelte Screencast', isComplete: false },
		{ id: 2, title: 'Take over world', isComplete: false }
	];

	return {
		status: 200,
		body: todos
	};
}

export async function post({ request }) {
	const data = await request.json();

	console.log(data);

	// add todo to database

	return {
		status: 201,
		body: {
			todo: `Created Todo: ${data.title}`
		}
	};
}
