# REACT QUERY
## Introduction and Comparison
### Overview
- Similar to SWR but a bit more special is fetching data based on queryKey
- Like using SWR's mutate to compare state
### Comparison
### Typescript
- Manage data types more closely
### Quick start
##### useQuery
- Queries
  - To subscribe to a query in your components or custom hooks, call the `useQuery` hook with at least:
```
import { useQuery } from '@tanstack/react-query'

function App() {
  const info = useQuery({ queryKey: ['todos'], queryFn: fetchTodoList })
}
```
###### Mutations
  - Unlike queries, mutations are typically used to `create/update/delete` data or perform `server side-effects`. For this purpose, TanStack Query exports a `useMutation` hook.
  - **IMPORTANT**: The mutate function is `an asynchronous function`, which means you `cannot use it directly in an event callback in React 16 and earlier`. If you need to `access the event in onSubmit` you need to `wrap mutate in another function`.
  - Resetting Mutation State
    - It's sometimes the case that you need to clear the `error` or `data` of a mutation request. To do this, you can use the `reset` function to handle this.
  - Mutation Side Effects
    - `useMutation` comes with some helper options that allow quick and easy side-effects at any stage during the mutation lifecycle
  - Consecutive mutations
    - When passed to the mutate function, they will be fired up only once and only if the component is still mounted
    - *Be aware that most likely, mutationFn passed to useMutation is asynchronous. In that case, the order in which mutations are fulfilled may differ from the order of `mutate` function calls.*
```
useMutation({
  mutationFn: addTodo,
  onSuccess: (data, error, variables, context) => {
    // Will be called 3 times
  },
})

[('Todo 1', 'Todo 2', 'Todo 3')].forEach((todo) => {
  mutate(todo, {
    onSuccess: (data, error, variables, context) => {
      // Will execute only once, for the last mutation (Todo 3), regardless which mutation resolves first
    },
  })
})
```
###### Promises
- Use mutateAsync instead of mutate to get a promise which will resolve on success or throw on an error.
- Retry
  - By default TanStack Query will not retry a mutation on error, but it is possible with the `retry` option:
```
const mutation = useMutation({
  mutationFn: addTodo,
  retry: 3,
})
```
- If mutations fail because the device is offline, they will be retried in the same order when the device reconnects.
###### Query Invalidation
- Waiting for queries to become stale before they are fetched again doesn't always work, especially when you know for a fact that a query's data is out of date because of something the user has done. For that purpose, the `QueryClient` has an `invalidateQueries` method that lets you intelligently mark queries as stale and potentially refetch them too!
```
// Invalidate every query in the cache
  queryClient.invalidateQueries()
// Invalidate every query with a key that starts with `todos`
  queryClient.invalidateQueries({ queryKey: ['todos'] })
```
###### Query Matching with `invalidateQueries`
- When using APIs like `invalidateQueries` and `removeQueries` (and others that support partial query matching), you can match multiple queries by their prefix, or get really specific and match an exact query