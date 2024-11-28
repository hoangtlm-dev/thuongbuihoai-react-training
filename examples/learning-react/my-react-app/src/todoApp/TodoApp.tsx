import { useReducer, useRef } from "react"

const initState = {
  job: "",
  jobs: []
}

const SET_JOB = "set_job"
const ADD_JOB = "add_job"
const DELETE_JOB = "delete_job"

const setJob = (payload: string) => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = (payload: string) => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = (payload: string) => {
  return {
    type: DELETE_JOB,
    payload
  }
}

const reduce = (state, action) => {
  let newState
  switch(action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]

      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default:
      throw new Error("Invalid action")
  }

  return newState
}

export function TodoApp() {
  const [state, dispatch] = useReducer(reduce, initState)
  const { job, jobs } = state

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(""))

    inputRef?.current?.focus()
  }

  return (
    <div>
      <h3>Todo App</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job: string, index: number) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index.toString()))}> x</span>
          </li>
        ))}
      </ul>
    </div>
  )
}