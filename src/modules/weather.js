// Class for weather info
class WeatherInfo {
	constructor(location, unitType, temp, feelsLike) {
		this.location = location;
		this.unitType = unitType;
		this.temp = temp;
		this.feelsLike = feelsLike;
	}
}

// Fetch weather data of location with API call
async function getWeatherFromLocation(location, unitType) {
	const locationName = fixCapitalization(location);

	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?unitGroup=${unitType}&key=YZMX7YNHTXCFQ6MNUXR2BRCTW&contentType=json`;

	const data = await fetch(url, { mode: 'cors' });
	const dataJSON = await data.json();

	const name = dataJSON.resolvedAddress;
	const temp = dataJSON.currentConditions.temp;
	const feelsLike = dataJSON.currentConditions.feelslike;

	return new WeatherInfo(name, unitType, temp, feelsLike);
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
