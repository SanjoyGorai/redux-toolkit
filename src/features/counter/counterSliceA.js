import { createAction, createReducer } from '@reduxjs/toolkit'

export const incrementA = createAction('counter/incrementA');
export const decrementA = createAction('counter/decrementA');

const initialState = {
    value: 0
}

const counterReducerA = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementA, (state, action) => {
            state.value++;
        })
        .addCase(decrementA, (state, action) => {
            state.value--;
        });
}); 


export default counterReducerA;