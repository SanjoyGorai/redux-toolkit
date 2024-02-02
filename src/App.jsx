import React from 'react'
import Counter from './components/Counter'
import CounterA from './components/CounterA'
import CounterB from './components/CounterB'

const App = () => {
  return (
    <div>
      <CounterB/>
      <CounterA/>
      <Counter />
    </div>
  )
}

export default App