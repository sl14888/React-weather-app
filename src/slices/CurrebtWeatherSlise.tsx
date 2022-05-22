import { createSlice } from "@reduxjs/toolkit";

type CurrentWeather = {
    weather: any,
    isLoading: boolean,
    response: Response;
};

type Response = {
    status: number,
    message: string,
}

const initialState = {
    weathering: {},
    isLoading: false,
    response: {
        status: 0,
        message: '',
    },
}

export const CurrentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSucces(state, action: any) {
            // state.weather = ;
        },
    }
})