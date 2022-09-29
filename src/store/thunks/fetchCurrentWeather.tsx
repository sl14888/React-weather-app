import { WeatherService } from "../../services/WeatherServices";
import { CurrentWeatherSlice } from "../../slices/CurrebtWeatherSlise";
import { AppDispatch } from "../Store";

export const fetchCurrentWeather =
    (payload: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(CurrentWeatherSlice.actions.fetchCurrentWeather())
            const res = await WeatherService.getCurrentWeather(payload);
            if (res.status === 200) {
                dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSucces(res))
            } else {
                dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSucces(res))
            }
        } catch (error) {
            console.log(error);

        }
    }