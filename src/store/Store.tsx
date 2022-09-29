import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CurrentWeatherSliceReducer from '../slices/CurrebtWeatherSlise'

const rootReducer = combineReducers({
    CurrentWeatherSliceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];