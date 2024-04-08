import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Bootstrap/bootstrap-5.3.3-dist/css/bootstrap.min.css';

function AbdoolCounter() {
  const [count, setCount] = useState(0)

  let [counter, setCounter] = useState(15)

  const reducerFunction = (state, action) => {
      switch(action.type) {
          case 'INCREMENT' : return { count : setCount.count + 1}
          case 'DECREMENT' : return { count : setCount.count - 1}
          default : return { state } 
      }
  }

  let [state, dispatch] = useReducer(reducerFunction, { count : 0 })

  const increaseValue = () => {
      if (counter == 20) console.log("Value can't be greater than 20 ", 20)
    else {
      setCounter(counter + 1)
      console.log("Value Added Now value is ", counter)

    }
  }

  const decreaseValue = () => {
    if (counter == 0) console.log("Value can't be less than 0 ", 0)
    else {
      setCounter(counter - 1)
      console.log("Value Subtracted Now value is ", counter)
    }
  }
  return (
    <>
    <h2 >VITE + REACT</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>

      </div>
    </>
  )
}

export default AbdoolCounter