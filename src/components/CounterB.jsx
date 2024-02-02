import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

const CounterB = () => {

    const value = useSelector(s => s.counterB.v);

    function handleClick(e) {
        switch (e.target.id) {
            case 'increment':

                break;
            case decrement:

                break;
        }

    }

    return (
        <div className='bg bg-yellow-100 p-3 '>
            <h1>Counter B Componant</h1>
            <h2 className='font-bold m-3 text-xl'>State Value :  {value} </h2>
            <button className='bg-blue-600 m-2' id='increment' onClick={handleClick}>Up</button>
            <button className='bg-blue-600 m-2' id='decrement' onClick={handleClick}>Up</button>

        </div>
    )
}

export default CounterB