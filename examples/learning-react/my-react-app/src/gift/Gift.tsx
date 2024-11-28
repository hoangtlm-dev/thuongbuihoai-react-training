import { useState } from "react"

const gifts = [
  "CPU Ii9",
  "RAM 32GB RGB",
  "RGB Keyboard"
]

export function Gift() {
  const [gift, setGift] = useState("")

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }

  return (
    <div>
      <h1>{gift || "No gift yet"}</h1>
      <button onClick={randomGift}>Get a gift</button>
    </div>
  )
}