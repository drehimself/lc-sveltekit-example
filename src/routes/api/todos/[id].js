export async function get({ params }) {
	// get todo from database using an ORM like Prisma
	const todo =
		Number(params.id) === 1
			? { id: 1, title: 'Finish Svelte Screencast', isComplete: false }
			: { id: 2, title: 'Take over world', isComplete: false };

	return {
		status: 200,
		body: todo
	};
}
