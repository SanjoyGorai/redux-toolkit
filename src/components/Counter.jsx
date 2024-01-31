import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from '../app/store';
import { increment } from '../features/counter/counterSlice';

const Counter = () => {

    console.log(store.getState());

    const stateValue = useSelector(state => state.counter.value);
    const dispath = useDispatch();

    function handleClick(e) {
        switch (e.target.id) {
            case 'increment':
                dispath(increment())
                break;
            case 'decrement':

                break;

            default:
                break;
        }
    }

    return (
        <div>
            <h1>This is Counter App</h1>
            <h3 className='font-bold text-2xl p-2 m-2'>Value: {stateValue}</h3>
            <div className='gap-2'>
                <button className='m-2 p-2 bg-green-600' id='increment' onClick={handleClick}>Increment</button>
                <button className='m-2 p-2 bg-orange-600' id='decrement' onClick={handleClick}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter