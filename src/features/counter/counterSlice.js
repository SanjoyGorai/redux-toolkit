
import { createSlice,  } from '@reduxjs/toolkit'


const initialState = 0;

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: initialState
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        decrement:  (state) => {
            state.value -= 1;
        }
    }
});

export default counterSlice.reducer;
export const { increment,decrement } = counterSlice.actions;