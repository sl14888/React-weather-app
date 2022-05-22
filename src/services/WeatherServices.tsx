import axios from "axios";

export class WeatherService {
    static getCurrentWeather(city: string) {
        return axios.get('/');
    }
}