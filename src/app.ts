import express from 'express';
import { getCityCoordinates } from './map';
import { getWeatherData } from './weather';

const app = express();

app.get('/getWeather', async (req, res) => {
    try {
        const cityName: string = req.query.city as string;
        if (!cityName) {
            return res.status(400).json({ error: 'City parameter is missing or invalid' });
        }

        const cityCoordinates = await getCityCoordinates(cityName);

        if (!cityCoordinates) {
            return res.status(404).json({ error: 'City not found; change the cityName in the URL.' });
        }

        const { lat, lon } = cityCoordinates;
        const weatherData = await getWeatherData(lat, lon);

        res.status(200).json({ weather: weatherData });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, click here: "http://localhost:3000/getWeather?city=cityName"`);
});
