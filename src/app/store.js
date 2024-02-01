import { configureStore } from '@reduxjs/toolkit'
import counterSlice, { counterReducer } from '../features/counter/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        counterReducer: counterReducer
    }
});

export default store;

// ()