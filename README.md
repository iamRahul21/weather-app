## Problem Statement: 
Build a node server with just one get endpoint "getWeather". take the city name as a query param, use Openstreetmap's api to get the coordinates of the city, then use any other weather api , with the fetched coordinates, get the weather data, return it.

## Contents:
- **src**
  - **map.ts**: uses Axios to fetch city coordinates from the OpenStreetMap API(https://nominatim.openstreetmap.org/search) and returns them as a Promise, handling cases where no data is found.
  - **weather.ts**: fetches weather data from the OpenWeatherMap API(https://api.openweathermap.org/data/2.5/weather) using Axios, returning the data as a Promise with metric units and error handling.
  - **app.ts**: sets up an Express server with a '/getWeather' endpoint, fetching and responding with weather data from OpenWeatherMap based on the provided city parameter, including error handling.
- **build**
  - **map.js**: Compiled JavaScript file corresponding to map.ts.
  - **weather.js**: Compiled JavaScript file corresponding to weather.ts.
  - **app.js**: Compiled JavaScript file corresponding to app.ts.

## Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

## Commands
1. To install all the dependencies
```terminal
npm install
````
2. To start the server
```terminal
npm start
````

This will start the server, and you can access the weather data by visiting http://localhost:3000/getWeather?city=yourCityName.
