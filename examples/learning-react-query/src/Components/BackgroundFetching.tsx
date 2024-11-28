import { useIsFetching, useQuery } from "react-query";
import { fetchUsers } from "./MutateSideEffect";

const BackgroundFetching = () => {
  const {
    status,
    data: todos,
    error,
    // isFetching,
  } = useQuery({
    queryKey: ['experts'],
    queryFn: fetchUsers,
  })

  const isFetching = useIsFetching()
  return (
  <>
    <h2>Background Fetching</h2>
    {
      status === 'loading' ? (
        <span>Loading...</span>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {isFetching ? <div>Refreshing...</div> : null}
    
          <div>
            {todos.map((user) => (
              <li>{user.name}</li>
            ))}
          </div>
        </>
      )
    }
  </>
  )
}

export default BackgroundFetching;
