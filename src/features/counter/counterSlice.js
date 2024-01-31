
import { createSlice, createReducer, createAction } from '@reduxjs/toolkit'


const initialState = {
    value: 0
}
const incrementR = createAction('counter/increment')
const decrementR = createAction('counter/decrement')

const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementR, (state, action) => {
            state.value++
        })
        .addCase(decrementR, (state, action) => {
            state.value--
        })
});

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
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