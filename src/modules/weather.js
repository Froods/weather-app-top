// Fetch weather data of location with API call
async function getWeatherFromLocation(location, unitType) {
	const locationName = fixCapitalization(location);

	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?unitGroup=${unitType}&key=YZMX7YNHTXCFQ6MNUXR2BRCTW&contentType=json`;

	const data = await fetch(url, { mode: 'cors' });
	const dataJSON = await data.json();

	console.log(`Temp: ${dataJSON.currentConditions.temp}`);
}

// Fixes capitalization - move this into input module
function fixCapitalization(string) {
	const restOfText = string.slice(1, string.length);
	const firstLetter = string.slice(0, 1);

	const secondPart = restOfText.toLowerCase();
	const firstPart = firstLetter.toUpperCase();

	return firstPart + secondPart;
}

export { getWeatherFromLocation };
