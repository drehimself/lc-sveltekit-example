<script context="module">
	export async function load({ fetch }) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);

		if (!response.ok) {
			return {
				status: response.status,
				error: new Error('Something went wrong')
			};
		}

		return {
			status: response.status,
			props: {
				posts: await response.json()
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<h2>Posts</h2>
<div>
	<ul>
		{#each posts as post}
			<li><a href={`/posts/${post.id}`}>{post.title}</a></li>
		{/each}
	</ul>
</div>
