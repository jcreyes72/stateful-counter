import React from 'react'
import './Counter.css'

const Counter = () => {
  return (
    <div className="grid-container">
        <div className="grid-item grid-item-1">
            <button className="addOne">Increment</button>
        </div>
        <div className="grid-item grid-item-2">
            <span className="number">0</span>
        </div>
        <div className="grid-item grid-item-3">
            <button className="subtractOne">Decrement</button>
        </div>
    </div>

  )
}

export default Counter