
import { createSlice, createReducer ,createAction} from '@reduxjs/toolkit'


const initialState = 0;
const initialStateR = {
    value : 0
}
const incrementR = createAction('counter/increment')

const reducerR = createReducer(initialStateR, (builder) => {
    builder
        .addCase(incrementR,(state,action)=>{
            state.value++
        })
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

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;