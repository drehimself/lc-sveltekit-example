<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>SvelteKit Site</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => goto('/about')}>Go to About</button>
