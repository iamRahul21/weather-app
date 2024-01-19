"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const map_1 = require("./map");
const weather_1 = require("./weather");
const app = (0, express_1.default)();
app.get('/getWeather', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cityName = req.query.city;
        if (!cityName) {
            return res.status(400).json({ error: 'City parameter is missing or invalid' });
        }
        const cityCoordinates = yield (0, map_1.getCityCoordinates)(cityName);
        if (!cityCoordinates) {
            return res.status(404).json({ error: 'City not found; change the cityName in the URL.' });
        }
        const { lat, lon } = cityCoordinates;
        const weatherData = yield (0, weather_1.getWeatherData)(lat, lon);
        res.status(200).json({ weather: weatherData });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, click here: "http://localhost:3000/getWeather?city=cityName"`);
});
