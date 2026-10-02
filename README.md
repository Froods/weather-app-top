# Weather App

A small weather app built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum. Type in a location, and the app shows its current temperature and the "feels like" temperature, using data from the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api).

## Features

- Search for any location (city, address, postcode, etc.)
- Shows the resolved location name, current temperature and "feels like" temperature
- Loads weather for New York by default on page load
- Uses metric units (°C)

## Tech stack

- Vanilla JavaScript (ES modules, `async`/`await`, Fetch API)
- HTML and CSS
- [Webpack](https://webpack.js.org/) for bundling and the dev server
- ESLint and Prettier for linting and formatting

## Project structure

```
src/
├── index.js            # Entry point: imports styles and sets up the UI
├── template.html       # HTML template used by html-webpack-plugin
├── styles.css          # App styles
├── images/
│   └── background.jpg  # Background image
└── modules/
    ├── weather.js      # Fetches data from Visual Crossing and returns a WeatherInfo object
    └── ui.js           # Handles the search form and renders the weather info to the DOM
webpack.common.js       # Shared Webpack config
webpack.dev.js          # Development config (dev server)
webpack.prod.js         # Production build config
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Installation

```bash
git clone https://github.com/Froods/weather-app-top.git
cd weather-app-top
npm install
```

### Scripts

| Command            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `npm run start`    | Starts the Webpack dev server and opens the app      |
| `npm run build`    | Creates a production build in `dist/`                |
| `npm run lint`     | Runs ESLint                                          |
| `npm run lint:fix` | Runs ESLint and fixes problems it can fix on its own |
| `npm run format`   | Formats the code with Prettier                       |

## How it works

1. `weather.js` exports `getWeatherFromLocation(location, unitType)`, which calls the Visual Crossing Timeline API and resolves to a `WeatherInfo` object with `location`, `unitType`, `temp` and `feelsLike`.
2. `ui.js` listens for the search form's submit event, fetches the weather for the entered location and updates the page with the result.

## API key

The Visual Crossing API key is currently hardcoded in `src/modules/weather.js`. It's a free-tier key, which is fine for a learning project, but anyone can see it in the bundled code. To use your own key, sign up at [Visual Crossing](https://www.visualcrossing.com/) and replace the `key` value in the request URL.
