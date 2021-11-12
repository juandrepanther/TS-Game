import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store/store"

interface ICoordinates {
 pointerX: number
 pointerY: number
}

const initialState: ICoordinates = {
 pointerX: 0,
 pointerY: 0
}

export const coordinatesReducer = createSlice({
 name: "cursor_coordinates",
 initialState,
 reducers: {
  setPointerX: (state, action: PayloadAction<number>) => {
   state.pointerX = action.payload
  },
  setPointerY: (state, action: PayloadAction<number>) => {
   state.pointerY = action.payload
  }
 }
})

export const { setPointerX, setPointerY } = coordinatesReducer.actions
export const selectPointerCoordinates = (state: RootState) =>
 state.cursor_coordinates
export default coordinatesReducer.reducer
