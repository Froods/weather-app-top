import './styles.css';
import { getWeatherFromLocation } from './modules/weather';
import { initEventListeners } from './modules/ui';

getWeatherFromLocation('esbjerg', 'metric').then((weatherInfo) => {
  console.log(weatherInfo);
});

initEventListeners();

