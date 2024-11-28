## Guides and Concepts
### Important Defaults
- Query instances via useQuery or useInfiniteQuery by default consider cached data as stale
- *To change this behavior, you can configure your queries both globally and per-query using the staleTime option. Specifying a longer staleTime means queries will not refetch their data as often*
- Stale queries are refetched automatically in the background when:
  - New instances of the query mount
  - The window is refocused
  - The network is reconnected
  - The query is optionally configured with a refetch interval
### Queries
- FetchStatus
  - `fetchStatus === 'fetching'` - The query is currently fetching.
  - `fetchStatus === 'paused'` - The query wanted to fetch, but it is paused.
  - `fetchStatus === 'idle'` - The query is not doing anything at the moment.
### Why two different states?
- a query in success status will usually be in idle fetchStatus, but it could also be in fetching if a background refetch is happening.
- a query that mounts and has no data will usually be in loading status and fetching fetchStatus, but it could also be paused if there is no network connection.
- The status gives information about the data: Do we have any or not?
- The fetchStatus gives information about the queryFn: Is it running or not?
### Query Keys
#### Simple Query Keys
- The simplest form of a key is an array with constants values.
```
// A list of todos
useQuery({ queryKey: ['todos'], ... })

// Something else, whatever!
useQuery({ queryKey: ['something', 'special'], ... })
```
#### Array Keys with variables
```
// An individual todo
useQuery({ queryKey: ['todo', 5], ... })

// An individual todo in a "preview" format
useQuery({ queryKey: ['todo', 5, { preview: true }], ...})

// A list of todos that are "done"
useQuery({ queryKey: ['todos', { type: 'done' }], ... })
```
#### Query Keys are hashed deterministically!
- This means that no matter the order of keys in objects, all of the following queries are considered equal:
```
useQuery({ queryKey: ['todos', { status, page }], ... })
useQuery({ queryKey: ['todos', { page, status }], ...})
useQuery({ queryKey: ['todos', { page, status, other: undefined }], ... })
```
- The following query keys, however, are not equal. Array item order matters!
```
useQuery({ queryKey: ['todos', status, page], ... })
useQuery({ queryKey: ['todos', page, status], ...})
useQuery({ queryKey: ['todos', undefined, page, status], ...})
```
#### If your query function depends on a variable, include it in your query key
- Since query keys uniquely describe the data they are fetching, they should include any variables you use in your query function that change.
```
function Todos({ todoId }) {
  const result = useQuery({
    queryKey: ['todos', todoId],
    queryFn: () => fetchTodoById(todoId),
  })
}
```
### Query Functions
- A query function can be literally any function that `returns a promise`. The promise that is returned should either `resolve the data` or `throw an error`.
### Background Fetching Indicators
- A query's `status === 'loading'` state is sufficient enough to show the initial hard-loading state for a query, but sometimes you may want to display an additional indicator that a query is refetching in the background. To do this, queries also supply you with an `isFetching` boolean that you can use to show that it's in a fetching state.
#### Displaying Global Background Fetching Loading State
- In addition to individual query loading states, if you would like to show a global loading indicator when **any** queries are fetching (including in the background), you can use the `useIsFetching` hook:
### Paginated / Lagged Queries
- Rendering paginated data is a very common UI pattern and in TanStack Query, it "just works" by including the page information in the query key:
```
const result = useQuery({
  queryKey: ['projects', page],
  queryFn: fetchProjects
})
```
- *The UI jumps in and out of the success and loading states because each new page is treated like a brand new query.*
#### Better Paginated Queries with keepPreviousData
-  If we were to use `useQuery`, **it would still technically work fine**, but the UI would jump in and out of the `success` and `loading` states as different queries are created and destroyed for each page or cursor. By setting `keepPreviousData` to `true` we get a few new things:
- **The data from the last successful fetch is available while new data is being requested, even though the query key has changed**.
- When the new data arrives, the previous `data` is seamlessly swapped to show the new data.
#### Lagging Infinite Query results with keepPreviousData
- While not as common, the `keepPreviousData` option also works flawlessly with the `useInfiniteQuery` hook, so you can seamlessly allow your users to continue to see cached data while infinite query keys change over time.
### Infinite Queries
- Rendering lists that can additively "load more" data onto an existing set of data or "infinite scroll" is also a very common UI pattern. TanStack Query supports a useful version of `useQuery` called `useInfiniteQuery` for querying these types of lists.
- When using `useInfiniteQuery`, you'll notice a few things are different:
  - `data` is now an object containing infinite query data:
  - `data.pages` array containing the fetched pages
  - `data.pageParams` array containing the page params used to fetch the pages
  - The `fetchNextPage` and `fetchPreviousPage` functions are now available
  - The `getNextPageParam` and `getPreviousPageParam` options are available for both determining if there is more data to load and the information to fetch it.
  - A `hasNextPage` boolean is now available and is true if `getNextPageParam` returns a value other than undefined
  - A `hasPreviousPage` boolean is now available and is true if `getPreviousPageParam` returns a value other than undefined
  - The `isFetchingNextPage` and `isFetchingPreviousPage` booleans are now available to distinguish between a background refresh state and a loading more state
- **Note**: ***When using options like initialData or select in your query, make sure that when you restructure your data that it still includes data.pages and data.pageParams properties, otherwise your changes will be overwritten by the query in its return!***
- With this information, we can create a "Load More" UI by:
  - Waiting for `useInfiniteQuery` to request the first group of data by default
  - Returning the information for the next query in `getNextPageParam`
  - Calling `fetchNextPage` function
- **Note**: ***It's very important you do not call fetchNextPage with arguments unless you want them to override the pageParam data returned from the getNextPageParam function. e.g. Do not do this: `<button onClick={fetchNextPage} />` as this would send the onClick event to the fetchNextPage function.***
- Remember, there can `only be a single ongoing fetch for an InfiniteQuery`. A single cache entry is shared for all pages, attempting to `fetch twice simultaneously might lead to data overwrites`.
- If you intend to enable simultaneous fetching, you can utilize the `{ cancelRefetch: false }` option `(default: true)` within `fetchNextPage`.
- To ensure a seamless querying process without conflicts, it's highly recommended to verify that `the query is not in an isFetching state`, especially if the user won't directly control that call.
```
<List
  onEndReached={() => !isFetching && fetchNextPage()}
/>
```
#### What happens when an infinite query needs to be refetched?
- When an infinite query becomes stale and needs to be refetched, each group is fetched sequentially, starting from the first one
##### refetchPage
- If you only want to actively refetch a subset of all pages, you can pass the `refetchPage` function to refetch returned from `useInfiniteQuery`
```
const { refetch } = useInfiniteQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
})

// only refetch the first page
refetch({ refetchPage: (page, index) => index === 0 })
```
- **Signature**
```
refetchPage: (page: TData, index: number, allPages: TData[]) => boolean
```
- The function is executed for each page, and only pages where this function returns true will be refetched.
### Mutations
- Unlike queries, mutations are typically used to `create/update/delete data or perform server side-effects`. For this purpose, TanStack Query exports a useMutation hook.
- **IMPORTANT**: ***The mutate function is an asynchronous function, which means you cannot use it directly in an event callback in React 16 and earlier. If you need to access the event in onSubmit you need to wrap mutate in another function. This is due to React event pooling.***
#### Resetting Mutation State
#### Mutation Side Effects
- `useMutation` comes with some helper options that allow quick and easy side-effects at any stage during the mutation lifecycle.
- **Be aware that most likely, mutationFn passed to useMutation is asynchronous. In that case, the order in which mutations are fulfilled may differ from the order of mutate function calls.**
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
      // Will execute only once, for the last mutation (Todo 3),
      // regardless which mutation resolves first
    },
  })
})
```
#### Promises
- Use `mutateAsync` instead of `mutate` to get a promise which will resolve on success or throw on an error.
#### Retry
```
const mutation = useMutation({
  mutationFn: addTodo,
  retry: 3,
})
```
### Query Invalidation
- Waiting for queries to become stale before they are fetched again doesn't always work, especially when you know for a fact that a query's data is out of date because of something the user has done. For that purpose, the `QueryClient` has an `invalidateQueries` method that lets you intelligently mark queries as stale and potentially refetch them too!
```
// Invalidate every query in the cache
  queryClient.invalidateQueries()
// Invalidate every query with a key that starts with `todos`
  queryClient.invalidateQueries({ queryKey: ['todos'] })
```
##### Query Matching with `invalidateQueries`
- When using APIs like `invalidateQueries` and `removeQueries` (and others that support partial query matching), you can match multiple queries by their prefix, or get really specific and match an exact query
### Invalidations from Mutations
```
import { useMutation, useQueryClient } from '/react-query'

const queryClient = useQueryClient()

// When this mutation succeeds, invalidate any queries with the `todos` or `reminders` query key
const mutation = useMutation({
  mutationFn: addTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
    queryClient.invalidateQueries({ queryKey: ['reminders'] })
  },
})
```
### Testing
```
npm install @testing-library/react-hooks react-test-renderer --save-dev
```
#### Our First Test