import { configureStore } from "@reduxjs/toolkit"
import secReducer from "../reducers/secReducer"
import sharkReducer from "../reducers/sharkReducer"
import statsReducer from "../reducers/statsReducer"

export const store = configureStore({
 reducer: {
  stats: statsReducer,
  seconds: secReducer,
  sharkIndex: sharkReducer
 }
})

//EXPORTS TYPES

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
