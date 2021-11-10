import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store/store"

interface ISeconds {
 sharkIndex: number
}

const initialState: ISeconds = {
 sharkIndex: 0
}

export const sharkReducer = createSlice({
 name: "sharkIndex",
 initialState,
 reducers: {
  selectShark: (state, action: PayloadAction<number>) => {
   state.sharkIndex = action.payload
  },
  
 }
})

export const { selectShark } =
 sharkReducer.actions
export const selectSharkIndex = (state: RootState) => state.sharkIndex
export default sharkReducer.reducer
