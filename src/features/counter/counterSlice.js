
import { createSlice, createReducer, createAction } from '@reduxjs/toolkit'


const initialState = {
    values: 0
}
const incrementR = createAction('counter/increment')
const decrementR = createAction('counter/decrement')

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementR, (state, action) => {
            state.values++
        })
        .addCase(decrementR, (state, action) => {
            state.values--
        })
});

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 5
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;