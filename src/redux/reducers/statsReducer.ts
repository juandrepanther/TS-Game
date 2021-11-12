import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store/store"

interface IinitialState {
 value: number
}

const initialState: IinitialState = {
 value: 0
}

export const statsReducer = createSlice({
 name: "stats",
 initialState,
 reducers: {
  increment: (state, action: PayloadAction<number>) => {
   state.value += action.payload
  }
 }
})

//EXPORTS ACTIONS, STATE

export const { increment } = statsReducer.actions
export const selectStats = (state: RootState) => state.stats
export default statsReducer.reducer
