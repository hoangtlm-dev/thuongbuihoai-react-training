import { useMutation } from 'react-query';
import axios from 'axios';

const AddUser = () => {
    const mutation = useMutation({
      mutationFn: (newTodo) => {
        return axios.post('https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts', newTodo)
      },
    })

    return (
      <>
      <h2>Add User</h2>
      <div>
        {mutation.isLoading ? (
          'Adding todo...'
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {(mutation.error as any).message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Todo added!</div> : null}

            <button
              onClick={() => {
                mutation.mutate({ name: 'Do Laundry' } as any)
              }}
            >
              Create Todo
            </button>
          </>
        )}
      </div>
      </>
    )
  }

export default AddUser;
