import './styles.css';
import { getWeatherFromLocation } from './modules/weather';

getWeatherFromLocation('esbjerg', 'metric').then((weatherInfo) => {
	console.log(weatherInfo);
});
