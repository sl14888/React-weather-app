import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];