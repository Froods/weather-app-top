import { getWeatherFromLocation } from './weather';

const form = document.querySelector('form');
const input = document.querySelector('#location-input');

const headerName = document.querySelector('#location-name');
const headerTemp = document.querySelector('#temp');
const headerFeelsLike = document.querySelector('#feels-like');

// Fixes capitalization
function fixCapitalization(string) {
	const restOfText = string.slice(1, string.length);
	const firstLetter = string.slice(0, 1);

	const secondPart = restOfText.toLowerCase();
	const firstPart = firstLetter.toUpperCase();

	return firstPart + secondPart;
}

// Function for loading eventlisteners on page
function initEventListeners() {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		if (input.value) {
			const location = fixCapitalization(input.value);

			getWeatherFromLocation(location, 'metric').then((weatherInfo) => {
				input.value = '';
				showInfo(weatherInfo);
			});
		}
	});

	getWeatherFromLocation('New York', 'metric').then((weatherInfo) => {
		showInfo(weatherInfo);
	});
}

// Show weatherinfo for location
function showInfo(obj) {
	headerName.textContent = obj.location;
	headerTemp.textContent = `${obj.temp}°`;
	headerFeelsLike.textContent = `Feels like: ${obj.feelsLike}°`;
}

export { initEventListeners };
