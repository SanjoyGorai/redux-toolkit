import React from 'react'
import { decrementA, incrementA } from '../features/counter/counterSliceA';
import { useSelector, useDispatch } from 'react-redux'

const CounterA = () => {
    const state = useSelector(state => state.counterA.value);
    const dispatch = useDispatch()
    function handleClick(e) {
        switch (e.target.id) {
            case 'increment':
                dispatch(incrementA())
                break;
            case 'decrement':
                dispatch(decrementA())
                break;
        }

    }


    return (
        <div>
            <h1>Counter A Cpomponant</h1>
            <h3 className='font-bold text-2xl p-2 m-2'>Value: {state}</h3>
            <div className='gap-2'>
                <button className='m-2 p-2 bg-green-600' id='increment' onClick={handleClick}>Increment</button>
                <button className='m-2 p-2 bg-orange-600' id='decrement' onClick={handleClick}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterA