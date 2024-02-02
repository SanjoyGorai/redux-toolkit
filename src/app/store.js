import { configureStore } from '@reduxjs/toolkit'
import counterSlice, { counterReducer } from '../features/counter/counterSlice';
import counterReducerA from '../features/counter/counterSliceA'
import CounterB from '../components/CounterB';
import counterCReducer from '../features/counter/counterSliceB';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        counterReducer: counterReducer,
        counterA: counterReducerA,
        counterB : counterCReducer
    }
});

export default store;

// ()