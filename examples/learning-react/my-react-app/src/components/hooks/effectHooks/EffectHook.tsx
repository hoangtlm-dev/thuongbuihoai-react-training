import React, { useEffect, useLayoutEffect, useState } from "react";

export function EffectCallback() {
  // useEffect (callback)
    // 1. Callback is always called after component mounted
    // 2. Call the callback every time the component re-render
  const [title, setTitle] = useState("")
  
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <h2>useEffect (callback)</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  );
}

export function Timer() {
  // userEffect (callback, [])
  // Call the callback only once after the component is mounted

  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

// ClearUp function is always called before component mounted
export function ClearUp() {
  const [countdown, setCountdown] = useState(180)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(countdown - 1)
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div>
      <h1>Clear up</h1>
      <h3>{countdown}</h3>
    </div>
  )
}

// Preview avatar
export function PreviewAvatar() {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  const handlePreviewAvatar = (event) => {
    // get file from event
    // file is object
    const file = event.target.files[0]
    file.preview = URL.createObjectURL(file)

    setAvatar(file)
  }

  return (
    <div>
      <h1>Preview Avatar</h1>
      <input type="file"
        onChange={handlePreviewAvatar}
      />
      {avatar && (
        <img src={avatar.preview} alt="images" />
      )}
    </div>
  )
}

// useLayoutEffect
export function UseLayoutEffect() {
  const [count, setCount] = useState(180)

  useLayoutEffect(() => {
   if (count > 3)
    setCount(0)
  }, [count])

  const handleRun = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Example useLayoutEffect</h1>
      <h3>{count}</h3>
      <button onClick={handleRun}>Run</button>
    </div>
  )
}
