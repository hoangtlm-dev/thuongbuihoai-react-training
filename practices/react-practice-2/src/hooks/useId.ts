import { useState } from "react";

export default function useId() {
  const [id, setId] = useState("");
  const date = new Date();
  setId(date.valueOf().toString())
  return id;
}