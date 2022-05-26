import { variables } from '$lib/variables';

export async function get({ params }) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${variables.openWeatherMapApiKey}`
	);

	return {
		status: 200,
		body: {
			weather: await response.json()
		}
	};
}
