<script context="module">
	export async function load({ params, fetch }) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

		if (!response.ok) {
			return {
				status: response.status,
				error: new Error('Something went wrong')
			};
		}

		return {
			status: response.status,
			props: {
				post: await response.json()
			}
		};
	}
</script>

<script>
	export let post;
</script>

<h2>{post.title}</h2>
<div>{post.body}</div>
