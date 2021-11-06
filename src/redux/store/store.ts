import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "../reducers/statsReducer";

export const store = configureStore({
    reducer: {
        stats: statsReducer
    }
});

//EXPORTS TYPES

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
