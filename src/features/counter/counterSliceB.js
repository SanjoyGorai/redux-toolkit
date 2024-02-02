import { createReducer, createAction } from '@reduxjs/toolkit';


const initialState = {
    v: 5
}

export const increment = createAction('increment');
export const decrement = createAction('decrement');

const counterCReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.v++
        })
        .addCase(decrement, (state, action) => {
            state.v--
        })
});

export default counterCReducer;
