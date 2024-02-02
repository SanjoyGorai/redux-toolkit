import { createReducer, createAction } from '@reduxjs/toolkit';


const initialState = {
    v: 5
}

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const incrementByAmount = createAction('incrementByAmount');

const counterCReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.v++;
        })
        .addCase(decrement, (state, action) => {
            state.v--;
        })
        .addCase(incrementByAmount, (state, action) => {
            state.v += action.payload;
        })
});

export default counterCReducer;
