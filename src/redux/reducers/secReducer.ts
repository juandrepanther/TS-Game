import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store/store"

interface ISeconds {
 seconds: number
 isStarted: boolean
}

const initialState: ISeconds = {
 seconds: 0,
 isStarted: false
}

export const secReducer = createSlice({
 name: "seconds",
 initialState,
 reducers: {
  addSeconds: (state, action: PayloadAction<number>) => {
   state.seconds = action.payload
  },
  decrementSeconds: (state) => {
   state.seconds -= 1
  },
  changeIsStarted: (state, action: PayloadAction<boolean>) => {
   state.isStarted = action.payload
  }
 }
})

export const { addSeconds, decrementSeconds, changeIsStarted } =
 secReducer.actions
export const selectSeconds = (state: RootState) => state.seconds
export default secReducer.reducer
