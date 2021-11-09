import { configureStore } from "@reduxjs/toolkit"
import secReducer from "../reducers/secReducer"
import statsReducer from "../reducers/statsReducer"

export const store = configureStore({
 reducer: {
  stats: statsReducer,
  seconds: secReducer
 }
})

//EXPORTS TYPES

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
