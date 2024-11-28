import { useRef, useState } from "react";

export function RefHook() {
  const [count, setCount] = useState(60)

  // useRef always return object
  let timerId = useRef()

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount -1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }

  return (
    <div>
      <h1>useRef hook</h1>
      <h3>{count}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}