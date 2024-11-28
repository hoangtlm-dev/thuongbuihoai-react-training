import axios from "axios"
import { useMutation } from "react-query"

const Mutations = () => {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post('https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts', newTodo)
    },
  })

  return (
    <div>
      <h2>Mutations</h2>
      {mutation.isLoading ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ name: 'Test mutations' })
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}

export default Mutations;