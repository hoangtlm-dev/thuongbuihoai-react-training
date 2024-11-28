import React, { useReducer, useState } from "react";

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrease}>
        Click me
      </button>
    </div>
  );
}

// useReducer
const initState = 0

const UP_ACTION = "up"
const DOWN_ACTION = "down"

const reducer = (state: number, action: string) => {
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default: throw new Error("Invalid action")
  }
}

export function Reducer() {
  // dispatch is used to trigger the action is up or down
  const [count, dispatch] = useReducer( reducer, initState)

  return (
    <div>
      <h1>Example useReducer</h1>
      <h3>{count}</h3>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  )
}