
import { createSlice, createReducer, createAction } from '@reduxjs/toolkit'


const initialState = 0;
const initialStateR = {
    value: 0
}
const incrementR = createAction('counter/increment')
const decrementR = createAction('counter/decrement')

const counterReducer = createReducer(initialStateR, (builder) => {
    builder
        .addCase(incrementR, (state, action) => {
            state.value++
        })
        .addCase(decrementR, (state,action) => {
            state.value--
        })
    // console.log();
});

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: initialState
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

export default counterReducer;
export const { increment, decrement } = counterSlice.actions;