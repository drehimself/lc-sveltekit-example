<!-- <script context="module">
	export async function load({ fetch }) {
		const response = await fetch(`/api/weather`);

		if (!response.ok) {
			return {
				status: response.status,
				error: new Error('Something went wrong')
			};
		}

		return {
			status: response.status,
			props: await response.json()
		};
	}
</script> -->

<script>
	export let weather;
</script>

<!-- {console.log(weather)} -->

<h2>Weather</h2>
<div>{weather.main.temp} C</div>
<div>{weather.weather[0].description}</div>
