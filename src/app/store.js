import { configureStore } from '@reduxjs/toolkit'
import counterSlice, { counterReducer } from '../features/counter/counterSlice';
import counterReducerA from '../features/counter/counterA'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        counterReducer: counterReducer,
        counterA : counterReducerA
    }
});

export default store;

// ()