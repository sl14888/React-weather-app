import axios, { AxiosResponse } from "axios";
import { Weather } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={c52cb8aecad25b58405a1a194e9bc421}`);
    }
}