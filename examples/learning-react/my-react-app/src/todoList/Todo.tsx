import { useRef, useState } from "react";

export function TodoList() {
  const [job, setJob] = useState("")
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs") || "")
    console.log(storageJobs);
    
    return storageJobs
  })

  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = () => {
    setJobs((prev: []) => {
      const newJobs = [...prev, job]

      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem("jobs", jsonJobs)

      return newJobs
    })
    setJob("")
    inputRef?.current?.focus()
  }
  return (
    <div>
      <h2>TodoList</h2>
      <input
        ref={inputRef}
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {
          jobs.map((job: string, index: number) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  )
}