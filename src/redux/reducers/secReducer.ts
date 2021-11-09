import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from '../store/store'

interface ISeconds {
    seconds: number
}

const initialState: ISeconds = {
    seconds: 20
}

export const secReducer = createSlice({
    name: 'seconds',
    initialState,
    reducers: {
        addSeconds: (state, action: PayloadAction<number>) => {
            state.seconds = action.payload
        },
        decrementSeconds: (state) => {
            state.seconds -= 1
        }
    }
})

export const {addSeconds, decrementSeconds} = secReducer.actions
export const selectSeconds = (state: RootState) => state.seconds
export default secReducer.reducer